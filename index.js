const header = document.querySelector('.navbar');

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

var i = 0;
var txt = 'Hello, I am Harsha Rashmi, a Web Development Enthusiast'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = function () {
    typeWriter();
};
