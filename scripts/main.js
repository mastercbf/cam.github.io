


document.querySelector('h1').onclick = function() {
    alert('oh hey there');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mysrc = myImage.getAttribute('src');
    if(mysrc === 'images/boston.jpeg') {
      myImage.setAttribute ('src','images/thequestion.png');
    } else {
      myImage.setAttribute ('src','images/boston.jpeg');
	  
    }
}
var div1 = document.getElementById("logo");
var align = div1.getAttribute("id");
 
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1')


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Cameron is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Cameron is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}