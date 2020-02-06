var alkuarvot = {video:{facingMode: "user"}, audio: false};
var track = null;

var kamerakuva = document.getElementById("kamerakuva");
var kuvasijainti = document.getElementById("kamersijainti");
var kuvacanvas = document.getElementById("kameracanvas");
var laukaisin = document.getElementById("laukaisin");

function cameraStarttaa() {
    navigator.mediaDevices.getUserMedia(alkuarvot)
    .then(function(kuvavirta){ kamerakuva.srcObject = kuvavirta;})
    .catch(function(error){console.log("hupsista")})
}

window.addEventListener("load", cameraStarttaa);

