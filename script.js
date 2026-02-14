// cargar captcha correctamente

window.onload = function(){

grecaptcha.render('recaptcha', {

'sitekey': '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',

'callback': function(){

// pasar a siguiente pantalla

document.getElementById("robotScreen").classList.add("hidden");

document.getElementById("photoScreen").classList.remove("hidden");

}

});

};


// fotos

const images = [

{src:"images/novio1.jpg", correct:true},
{src:"images/fake1.jpg", correct:false},
{src:"images/novio2.jpg", correct:true},
{src:"images/fake2.jpg", correct:false},
{src:"images/novio3.jpg", correct:true},
{src:"images/novio4.jpg", correct:true}

];

const grid=document.getElementById("grid");

images.forEach(img=>{

const el=document.createElement("img");

el.src=img.src;

el.dataset.correct=img.correct;

el.dataset.selected=false;

el.onclick=()=>{

el.dataset.selected = el.dataset.selected=="true" ? "false" : "true";

el.classList.toggle("selected");

};

grid.appendChild(el);

});


// verificar fotos

function verificar(){

let ok=true;

document.querySelectorAll("#grid img").forEach(img=>{

if(img.dataset.correct=="true" && img.dataset.selected=="false")
ok=false;

if(img.dataset.correct=="false" && img.dataset.selected=="true")
ok=false;

});

if(ok){

document.getElementById("photoScreen").classList.add("hidden");

document.getElementById("finalScreen").classList.remove("hidden");

}else{

document.getElementById("error").innerText="Torna-ho a intentar ❤️";

}

}
