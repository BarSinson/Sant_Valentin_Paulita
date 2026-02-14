// checkbox inicial

document.getElementById("checkbox").addEventListener("click", () => {

document.getElementById("robotScreen").classList.add("hidden");

document.getElementById("photoScreen").classList.remove("hidden");

});

// imatges

const images = [

{src:"images/novio1.jpg", correct:true},
{src:"images/fake1.jpg", correct:false},
{src:"images/novio2.jpg", correct:true},
{src:"images/fake2.jpg", correct:false},
{src:"images/novio3.jpg", correct:true},
{src:"images/novio4.jpg", correct:true},

];

const grid = document.getElementById("grid");

images.forEach(img=>{

const element=document.createElement("img");

element.src=img.src;

element.dataset.correct=img.correct;

element.dataset.selected="false";

element.onclick=()=>{

if(element.dataset.selected=="false"){

element.dataset.selected="true";

element.classList.add("selected");

}else{

element.dataset.selected="false";

element.classList.remove("selected");

}

};

grid.appendChild(element);

});

function verificar(){

let correcto=true;

document.querySelectorAll(".grid img").forEach(img=>{

if(img.dataset.correct=="true" && img.dataset.selected=="false")
correcto=false;

if(img.dataset.correct=="false" && img.dataset.selected=="true")
correcto=false;

});

if(correcto){

document.getElementById("photoScreen").classList.add("hidden");

document.getElementById("finalScreen").classList.remove("hidden");

}else{

document.getElementById("error").innerText="Torna-ho a intentar ❤️";

}

}

