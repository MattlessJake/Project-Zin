let navbar = document.getElementById('NavBar');
let scrollBox = document.getElementById('scrollBox')
let originalWidth = navbar.style.width;
let originalLeft = navbar.style.left;

window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.width = "100%";
        navbar.style.left = "0";
        navbar.style.borderRadius = "0";
        document.getElementById('Lbd').style.borderRadius = "0";
        document.getElementById('Rbd').style.borderRadius = "0";
    }
    else {
        navbar.style.width = originalWidth;
        navbar.style.left = originalLeft;
        navbar.style.borderRadius = "0 0 50px 50px";
        document.getElementById('Lbd').style.borderRadius = "0 0 0 50px";
        document.getElementById('Rbd').style.borderRadius = "0 0 50px 0";
    }

    if (document.documentElement.scrollTop >= document.getElementById('PartFive').offsetTop-80) {
        document.getElementById('Lbd').classList.remove('active');
        document.getElementById('SecondLink').classList.remove('active');
        document.getElementById('ThirdLink').classList.remove('active');
        document.getElementById('FourthLink').classList.remove('active');
        document.getElementById('Rbd').classList.add('active');
    }
    else if(document.documentElement.scrollTop >= document.getElementById('PartThree').offsetTop-80) {
        document.getElementById('Lbd').classList.remove('active');
        document.getElementById('SecondLink').classList.remove('active');
        document.getElementById('ThirdLink').classList.add('active');
        document.getElementById('FourthLink').classList.remove('active');
        document.getElementById('Rbd').classList.remove('active');
    }
    else if(document.documentElement.scrollTop >= document.getElementById('PartTwo').offsetTop-80) {
        document.getElementById('Lbd').classList.remove('active');
        document.getElementById('SecondLink').classList.add('active');
        document.getElementById('ThirdLink').classList.remove('active');
        document.getElementById('FourthLink').classList.remove('active');
        document.getElementById('Rbd').classList.remove('active');
    }
    else {
        document.getElementById('Lbd').classList.add('active');        
        document.getElementById('SecondLink').classList.remove('active');
        document.getElementById('ThirdLink').classList.remove('active');
        document.getElementById('FourthLink').classList.remove('active');
        document.getElementById('Rbd').classList.remove('active');
    }
}

let blogContainer = document.getElementById('BlogContainer');
let temp = document.getElementById('Temp');

window.onload = function() {
    let txtFile = new XMLHttpRequest();
    txtFile.open("GET", "https://tempsiteforzin.netlify.com/BlogPosts/TestDoc.txt", true);
    txtFile.onreadystatechange = function() {
        if (txtFile.readyState === 4) {
            if (txtFile.status === 200 || txtFile.status == 0) {
                let allText = txtFile.responseText;
                let lines = txtFile.responseText.split("\n")
                console.log(allText);
                for (i = 0; i < lines.length; i++) {
                    temp.innerHTML += lines[i] + "\n";
                }
                //temp.innerHTML = lines;
            }
        }
    }
    txtFile.send(null);
}