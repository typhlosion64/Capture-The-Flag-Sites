// Different Slides

document.getElementById("backward-button").style.visibility = "hidden";
document.getElementById("ready-button").style.visibility = "hidden";

var p0 =
  "After a technologically enriched global trek, Cyber Sam is finally returning to the GCU Cyber Range. She encountered many cybersecurity obstacles along the way ranging from subjects like networking, cryptology, steganography, and even forensics!";
var p1 =
  "Where do you play into all of this? Cyber Sam challenges you and your team to complete as many of her ethical cybersecurity hacking tasks as possible. Are you up to the challenge?";

var p2 =
  "While boarding an airplane that was to fly her to Europe, Cyber Sam unfortunately left her briefcase (which contained her mobile phone) behind.";
var p3 =
  "With the lifeline to all her important contacts gone, Cyber Sam began to panic. What was she to do?";
var p4 =
  "Fortunately for Cyber Sam, she had her work phone. She immediately called you to go and retrieve the briefcase stressing how important it was that you retrieve the documents inside.";
var p5 =
  "To access the contents of the brief case you will have to decipher the code used to unlock it.";
var p6 =
  "After you have gained access to the contents of the briefcase, you see that there is a laptop and cell phone inside. The laptop, named “Norway”, uses the same password as the briefcase.";
var p7 =
  "Cyber Sam instructed you to access a file on the laptop that contains encoded emails. You will have to search online to find out the encoding that was used and then decode the message.";
var p8 =
  "Cyber Sam needs you to decipher the type of hash used to encrypt the file and validate its authenticity before she is to meet with her client, a prominent CEO of a financial management company in Finland.";
var p9 =
  "Cyber Sam also asks you for one last favor. She asks that you crack the hash and decipher the temporary password that her boss will use to upgrade the Sweden division’s network security before she changes it.";

// code that handles the turning of pages
var y = 0;

var i = 0;

var txt = "Cyber Sam's Challenge";

var speed = 40; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("banner").innerHTML += txt.charAt(i);
    i++;

    setTimeout(typeWriter, speed);
  }
}
function forward() {
  y = y + 1;
  if (y > 9) {
    y = 9;
    writeThis();
  } else {
    writeThis();
  }
}
function backward() {
  y = y - 1;
  if (y < 0) {
    y = 0;
    writeThis();
  } else {
    writeThis();
  }
}
// actually writes the text onto the screen

function writeThis() {
  if (y == 0) {
    document.getElementById("message").innerHTML = p0;
    document.getElementById("backward-button").style.visibility = "hidden";
  }
  if (y == 1) {
    document.getElementById("message").innerHTML = p1;
    document.getElementById("backward-button").style.visibility = "visible";
  }
  if (y == 2) {
    document.getElementById("message").innerHTML = p2;
  }

  if (y == 3) {
    document.getElementById("message").innerHTML = p3;
  }
  if (y == 4) {
    document.getElementById("message").innerHTML = p4;
  }
  if (y == 5) {
    document.getElementById("message").innerHTML = p5;
  }
  if (y == 6) {
    document.getElementById("message").innerHTML = p6;
  }
  if (y == 7) {
    document.getElementById("message").innerHTML = p7;
  }
  if (y == 8) {
    document.getElementById("message").innerHTML = p8;
    document.getElementById("forward-button").style.visibility = "visible";
    document.getElementById("ready-button").style.visibility = "hidden";
  }
  if (y == 9) {
    document.getElementById("message").innerHTML = p9;
    document.getElementById("forward-button").style.visibility = "hidden";
    document.getElementById("ready-button").style.visibility = "visible";
  }
}
