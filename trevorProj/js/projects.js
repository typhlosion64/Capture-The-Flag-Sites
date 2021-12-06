var btn = document.querySelector('#close-button');
var myIndex = 0;
carousel();

btn.addEventListener("click", function(){
    var alert = document.querySelector('#projects-header');
    alert.style.display = 'none';
});




function carousel() {
  var i;
  var x = document.getElementsByClassName("projects-slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); 
}
