var i = 0;

var txt = "Hack with GCU's CTFs!";

var speed = 25; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("landing-msg").innerHTML += txt.charAt(i);
    i++;

    setTimeout(typeWriter, speed);
  }
}

var oneNum = 0;
var oneText = "GLHF!";
var twoText = "Almost there!";

function one() {
  if (oneNum == 0) {
    document.getElementById("landing-msg").innerHTML = "";
  }
  if (oneNum < oneText.length) {
    document.getElementById("landing-msg").innerHTML += oneText.charAt(oneNum);
    oneNum++;
    setTimeout(one, speed);
  }
}
function oneBlank() {
  oneNum = 0;
  document.getElementById("landing-msg").innerHTML = txt;
}

function two() {
  if (oneNum == 0) {
    document.getElementById("landing-msg").innerHTML = "";
  }
  if (oneNum < twoText.length) {
    document.getElementById("landing-msg").innerHTML += twoText.charAt(oneNum);
    oneNum++;
    setTimeout(two, speed);
  }
}
