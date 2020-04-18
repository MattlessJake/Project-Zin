const canvas = document.getElementById('AusClock');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let d  = new Date();

    let b = new Date();
    let utc = b.getUTCDate();
    let nd = new Date(utc + (3600000*11));
    let n = nd.getUTCHours();

    let sc = d.getSeconds();
    let mn = d.getMinutes();
    let hr = n;//d.getHours();
    let ms = d.getMilliseconds();

    function hours12() { return (n + 24) % 12 || 0 ; }
    let hr12 = hours12();


    //drawArc(canvas.width/2, canvas.height/2, 300, -90, 360, false, "#353535", "#353535", true);                    
    drawArc(canvas.width/2, canvas.height/2, 300, -90, (hr12*30)+(mn*6/12)-90, false, "#dfdfdf", "None", false);                    
    drawArc(canvas.width/2, canvas.height/2, 230, -90, (mn*6)+(sc*6/60)-90, false, "#46e6cb", "None", false);
    drawArc(canvas.width/2, canvas.height/2, 160, -90, (sc*6)+(ms*0.36/60)-90, false, "#dfdfdf", "None", false);
    drawArc(canvas.width/2, canvas.height/2, 140, -90, ms*0.36-90, false, "#46e6cb", "None", false);
    ctx.beginPath();
    ctx.fillStyle = 'White';
    //ctx.font = "40px Century Gothic";
    ctx.font = "40px Lucida Console";
    //ctx.font = "40px Apercu Mono";
    ctx.textAlign = 'center';
    if (hr < 12) {
        ctx.fillText("AM", canvas.width/2, canvas.height/2);
    }
    else ctx.fillText("PM", canvas.width/2, canvas.height/2);
    ctx.closePath();

    ctx.fillStyle = '#46e6cb';
    ctx.fillTextCircle("12 1  2  3  4  5  6  7  8  9 10 11 ", canvas.width/2, canvas.height/2, 250, -.1);
    ctx.fillStyle = '#dfdfdf';
    ctx.fillTextCircle("0  10  20  30  40  50  ", canvas.width/2, canvas.height/2, 180, 0);
    
    requestAnimationFrame(main);
}

function drawArc(x, y, r, s, e, antiClock, line, fill, doFill) {
    let startAngle = s * (Math.PI/180);
    let endAngle = e * (Math.PI/180);

    let radius = r;

    ctx.strokeStyle = line;
    ctx.fillStyle = fill;
    ctx.lineWidth = 8;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, antiClock);
    if (doFill) ctx.fill();
    ctx.stroke();
}

CanvasRenderingContext2D.prototype.fillTextCircle = function(text,x,y,radius,startRotation) {
    var numRadsPerLetter = 2*Math.PI / text.length;
    this.save();
    this.translate(x,y);
    this.rotate(startRotation);

    for(var i=0;i<text.length;i++){
        this.save();
        this.rotate(i*numRadsPerLetter);

        this.fillText(text[i],0,-radius);
        this.restore();
    }
    this.restore();
}

main();