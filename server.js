const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

let blogIndex = 0;
let theFiles;

let app = express();
app.use(express.static('public'));
let urlencodedParser = bodyParser.urlencoded({ extended: true })
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');

    fs.readdir(msgPath, 'utf-8', function(err, files) {
        if(err) throw err;
        theFiles = files;
        blogIndex = files.length-1;
    })
    fs.readFile('./index.html', null, function(err, data) {
        if(err) throw err;
        else res.write(data);
        res.end();
    })
})

app.get('/blog', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    
    fs.readFile('./blog.html', null, function(err, data) {
        if(err) throw err;
        else res.write(data);
        res.end();
    })
})

const msgPath = __dirname + '/public/BlogPosts'

app.post('/send', urlencodedParser, function(req, res) {
    let body = req.body;
    let newDate = body.date.slice(5, 7) + '-' + body.date.slice(8) + '-' + body.date.slice(0, 4)
    let showDate = body.date.slice(8) + '/' + body.date.slice(5, 7) + '/' + body.date.slice(0, 4)
    let newContent = body.content.replace('\n', '<br />');
    let thePost = body.title + '\n' + showDate + '\n' + body.content;
    fs.writeFile(`${msgPath}/${newDate}.txt`, thePost, function(err) {
        if(err) throw err;
        console.log("Saved file ", newDate, '.txt')
    });
    res.redirect('/blog');
})

app.post('/getPost', urlencodedParser, function(req, res) {
    let increment = req.body.increment;

    res.setHeader('Content-Type', 'text/json');
    if (increment == 1) {
        if(blogIndex + 1 > theFiles.length-1) blogIndex = 0;
        else blogIndex++;
        res.end(JSON.stringify({'fileName': `${theFiles[blogIndex]}`}))
    }
    else if (increment == 0) {
        res.end(JSON.stringify({'fileName': `${theFiles[blogIndex]}`}))
    }
    else if (increment == -1) {
        if(blogIndex - 1 < 0) blogIndex = theFiles.length-1;
        else blogIndex--;
        res.end(JSON.stringify({'fileName': `${theFiles[blogIndex]}`}))
    }
})

let PORT = process.env.PORT || 8000;
let server = app.listen(PORT, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})

function getDate() {
    let d = new Date();
    d = ('0' + d.getDate()).slice(-2) + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear() + "_" + ('0' + d.getHours()).slice(-2) + ('0' + d.getMinutes()).slice(-2) + ('0' + d.getSeconds()).slice(-2);
    return d;
}