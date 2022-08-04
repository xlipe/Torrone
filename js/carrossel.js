function slide1(){
document.getElementById('slidito').src="slider/slider1.jpg";
setTimeout("slide2()", 1500)}
    
function slide2(){
document.getElementById('slidito').src="slider/slider2.jpg";
setTimeout("slide3()", 1500)
}

function slide3(){
document.getElementById('slidito').src="slider/slider3.jpg";
setTimeout("slide4()", 1500)
}

function slide4(){
document.getElementById('slidito').src="slider/slider4.jpg";
setTimeout("slide1()", 1500)
}