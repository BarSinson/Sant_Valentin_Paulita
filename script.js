const imagenes = [
{src:"images/tu1.jpg", correcto:true},
{src:"images/fake1.jpg", correcto:false},
{src:"images/tu2.jpg", correcto:true},
{src:"images/fake2.jpg", correcto:false},
{src:"images/tu3.jpg", correcto:true},
{src:"images/tu4.jpg", correcto:true}
];

const grid = document.getElementById("grid");

imagenes.forEach((img,index)=>{
const elemento = document.createElement("img");
elemento.src = img.src;
elemento.dataset.correcto = img.correcto;
elemento.dataset.selected = "false";

elemento.onclick = ()=>{
if(elemento.dataset.selected=="false"){
elemento.dataset.selected="true";
elemento.classList.add("selected");
}else{
elemento.dataset.selected="false";
elemento.classList.remove("selected");
}
};

grid.appendChild(elemento);
});

function verificar(){

let correcto = true;

document.querySelectorAll(".grid img").forEach(img=>{
if(img.dataset.correcto=="true" && img.dataset.selected=="false"){
correcto=false;
}
if(img.dataset.correcto=="false" && img.dataset.selected=="true"){
correcto=false;
}
});

if(correcto){

document.querySelector(".container").style.display="none";

document.getElementById("sorpresa").classList.remove("hidden");

}else{

document.getElementById("mensaje").innerText="Intenta otra vez ❤️";

}

}

