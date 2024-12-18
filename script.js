// hamburgermenu

function myFunction(x) {
    x.classList.toggle("change");
  }

// responsive sidebar menu

const menu = document.querySelector('.navbar #menu');
const nav = document.querySelector('.navbar .navbar-nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('active')
});

const hamburger = document.querySelector('#menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove('active')
  }
})

// slider
let slide = document.querySelectorAll('.slide')
var current = 0;

function cls(){
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }
}

function next(){
    cls();
    if(current === slide.length-1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x += 0.1;
        slide[current].style.opacity = x;
        if(x >= 1){
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);
}

function prev(){
    cls();
    if(current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function() {
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1){
            clearInterval(intX);
            x = 0.4
        }
        
    }, 100);
}

function start(){
    cls();
    slide[current].style.display = 'block';
}
start();


// countdown

function showTime(){
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var session = "AM";

	if(h == 0){
		h = 12;
	}
	if (h > 12) {
		h = h - 12 ;
		session = "PM";
	}

	h = (h<10) ? "0" + h : h;
	m = (m<10) ? "0" + m : m;
	s = (s<10) ? "0" + s : s;

	var time = h + ":" + m + ":" + s + " " + session;

	document.getElementById("DisplayClock").innerText = time;
	// document.getElementById("DisplayClock").textContent = time;

	setTimeout(showTime, 1000);
}

showTime();