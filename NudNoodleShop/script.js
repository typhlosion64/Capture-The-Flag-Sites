var isDarkened = false;
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const wholePage = document.getElementsByClassName("container")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    if (!isDarkened) {
        isDarkened = true;
        wholePage.style.backgroundColor = "#b56c36";
    } else {
        isDarkened = false;
        wholePage.style.backgroundColor = "#e28743";
    }
});

var i = 0;
var txt = "The secret to great food is even greater people."; /* The text */
var speed = 40; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("about-header").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function checkLogin() {
    return (
        document.getElementById("username").value == "admin" &&
        document.getElementById("password").value == "tegoshi9!"
    );
}

function loginRedirect() {
    if (checkLogin()) window.location.href = "hidden.php";
    else alert("INVALID LOGIN");
}