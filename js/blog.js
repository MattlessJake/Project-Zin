let blog = document.getElementById('BlogContainer');
blogList = new Array();

$.ajax({
    url: "/BlogPosts",
    success: function(data){
        $(data).find("a:contains(.txt)").each(function(){
            // will loop through 
            var images = $(this).attr("href");

            blogList.push(images)
            GetFile(images);
            //$('<p></p>').html(images).appendTo(box)
        });
    }
});
console.log(blogList);

function GetFile(fileName) {
    let txtFile = new XMLHttpRequest();
    txtFile.open("GET", "/BlogPosts/" + fileName, true);
    txtFile.onreadystatechange = function() {
        if (txtFile.readyState === 4) {
            if (txtFile.status === 200 || txtFile.status == 0) {
                let allText = txtFile.responseText;
                let lines = txtFile.responseText.split("\n")
                makePost(fileName, lines);
            }
        }
    }
    txtFile.send(null);
}

function makePost(fileName, text) {
    let post = document.createElement('DIV');
    let topBar = document.createElement('DIV');
    let title = document.createElement('P');
    let date = document.createElement('P');
    let content = document.createElement('P');

    for (i = 0; i < text.length; i++) {
        if (i == 0) title.innerHTML = text[i];
        else if (i == 1) date.innerHTML = text[i];
        else content.innerHTML += text[i] + "<br />";
    }
    title.classList.add('blogName');
    topBar.appendChild(title);
    date.classList.add('blogDate');
    topBar.appendChild(date);

    post.appendChild(topBar);
    content.classList.add('content');
    post.appendChild(content);

    post.classList.add('blogPost');
    blog.appendChild(post);
}