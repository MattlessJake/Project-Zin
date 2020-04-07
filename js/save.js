let name = document.getElementById('inputName');
let date = document.getElementById('inputDate');
let content = document.getElementById('inputContent');

function SaveFile() {
    if (name.value != "" && date.value != "" && content.value != "") {
        newDate = date.value.substring(8, 10) + "/" + date.value.substring(5, 7) + "/" + date.value.substring(0, 4);
        let data = new Blob([name.value + "\n" + newDate + "\n" + content.value], {type: 'text/plain'});
        let txtFile = window.URL.createObjectURL(data);
        
        let link = document.createElement('a');
        link.setAttribute('download', date.value + '.txt');
        link.href = txtFile;
        document.body.appendChild(link);
        
        window.requestAnimationFrame(function() {
            let event = new MouseEvent('click');
            link.dispatchEvent(event);
            document.body.removeChild(link);
        });
    }
    else alert('Please fill in the empty field(s)');
}