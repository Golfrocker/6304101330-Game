var point = 0;
var pic = 1;

$(document).keyup(function(event) { 
    pop();
});

function pop() {
    play_pop();
    point = point + 1;
    setCookie("0", point);
    changePic();
    document.getElementById("point").innerHTML = point;
}

function changePic() {
    if (pic == 0) {
        pic = 1;
        document.getElementById("pic").src ='../picture/shoot.JPG';
        time();
    }
    else {
        pic = 0;
        document.getElementById("pic").src = '../picture/noshoot.JPG';
    }
}

function time() {
    var check = true;
    let start = Date.now();

    setInterval(function () {
        if (check) {
            let diff = Math.floor((Date.now() - start) / 10);
            console.log(diff);

            if (diff >= 10){
                check = false;
                changePic();
            }
        }
    }, 10);
}

function play_pop() {
    document.getElementById("sound").pause();
    document.getElementById("sound").play();
    
}

function setCookie(cpoint, cvalue) {
    document.cookie = cpoint + "=" + cvalue;
}
