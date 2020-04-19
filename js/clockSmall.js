const canvas2 = document.getElementById('AusClock-small');
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth;
canvas2.height = 100;

function main2() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

    function DoubleDigit(num) {
        if (num < 10) {
            return "0" + num;
        }
        else return num;
    }

    function IsAM(time) {
        if (time > 12) return "AM";
        else return "PM";
    }

    ctx2.beginPath();
    ctx2.fillStyle = 'White';
    //ctx.font = "40px Century Gothic";
    ctx2.font = "40px Lucida Console";
    //ctx.font = "40px Apercu Mono";
    ctx2.textAlign = 'center';
    ctx2.fillText(DoubleDigit(hr12) + ":" + DoubleDigit(mn) + ":" + DoubleDigit(sc) + " " + IsAM(hr), canvas2.width/2, canvas2.height/2);
    ctx2.closePath();
    
    requestAnimationFrame(main2);
}

main2();