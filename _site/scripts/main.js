


document.querySelector('h1').onclick = function() {
    alert('ouch that hurts ');
}

var myImage1 = document.querySelector('#logo');

myImage1.onclick = function() {
    var mysrc = myImage1.getAttribute('src');
    if(mysrc === 'images/thequestion.png' || mysrc=== 'images/texas.jpeg') {
      myImage1.setAttribute ('src','images/boston.jpeg');
    } else {
      myImage1.setAttribute ('src','images/texas.jpeg');

    }
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

var thefuture = document.getElementById("where");

thefuture.onclick =function(){
	var pass = prompt('what do you see');
	if(pass === 'fatshit') {
      window.location.assign("http://cameronfeder.com/right");


    }
}
