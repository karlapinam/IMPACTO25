$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });


/*  ///////// CHAT/////////////*/
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

/* ..............tu closet cod ............. */

$(document).ready(function()
{ 
  $("#cazul").click(function(){
    $("#a").show();
    $("#a2").hide();
    $("#a3").hide();
    $("#a4").hide();
  });
}
);
$(document).ready(function()
{
   $("#cblanco").click(function(){
       $("#a2").show();
       $("#a").hide();
       $("#a3").hide();
       $("#a4").hide();
   });
} 
);
$(document).ready(function()
{
   $("#cnegro").click(function(){
       $("#a3").show();
       $("#a2").hide();
       $("#a").hide();
       $("#a4").hide();
   });
} 
);
$(document).ready(function()
{
   $("#crojo").click(function(){
       $("#a4").show();
       $("#a2").hide();
       $("#a3").hide();
       $("#a").hide();

   });
} 
);

$(document).ready(function()
{ 
  $("#pazul").click(function(){
    $("#b").show();
    $("#b2").hide();
    $("#b3").hide();
    $("#b4").hide();
  });
}
);
$(document).ready(function()
{
   $("#pblanco").click(function(){
       $("#b2").show();
       $("#b").hide();
       $("#b3").hide();
       $("#b4").hide();
       
   });
} 
);
$(document).ready(function()
{
   $("#pnegro").click(function(){
       $("#b3").show();
       $("#b2").hide();
       $("#b").hide();
       $("#b4").hide();
   });
} 
);
$(document).ready(function()
{
   $("#projo").click(function(){
       $("#b4").show();
       $("#b2").hide();
       $("#b3").hide();
       $("#b").hide();
   });
} 
);

$(document).ready(function()
{ 
  $("#zazul").click(function(){
    $("#c").show();
    $("#c2").hide();
    $("#c3").hide();
    $("#c4").hide();
  });
}
);
$(document).ready(function()
{
   $("#zblanco").click(function(){
       $("#c2").show();
       $("#c").hide();
       $("#c3").hide();
       $("#c4").hide();
   });
} 
);
$(document).ready(function()
{
   $("#znegro").click(function(){
       $("#c3").show();
       $("#c2").hide();
       $("#c").hide();
       $("#c4").hide();
   });
} 
);
$(document).ready(function()
{
   $("#zrojo").click(function(){
       $("#c4").show();
       $("#c2").hide();
       $("#c3").hide();
       $("#c").hide();
   });
} 
)

///// REGISTRATE


let botonregistrate= document.getElementById("botonregistrate")




const cazul = document.getElementById("cazul");
const cblanco = document.getElementById("cblanco");
 const cnegro = document.getElementById("cnegro");
 const crojo = document.getElementById("crojo");
 const pazul = document.getElementById("pazul");
 const pblanco = document.getElementById("pblanco");
 const pnegro = document.getElementById("pnegro");
 const projo = document.getElementById("projo");
 const zazul = document.getElementById("zazul");
 const zblanco = document.getElementById("zblanco");
 const znegro = document.getElementById("znegro");
 const zrojo = document.getElementById("zrojo");


  // const cazul = document.getElementById("cazul");
// const cblanco = document.getElementById("cblanco");
// const cnegro = document.getElementById("cnegro");
// const crojo = document.getElementById("crojo");
// const pazul = document.getElementById("pazul");
// const pblanco = document.getElementById("pblanco");
// const pnegro = document.getElementById("pnegro");
// const projo = document.getElementById("projo");
// const zazul = document.getElementById("zazul");
// const zblanco = document.getElementById("zblanco");
// const znegro = document.getElementById("znegro");
// const zrojo = document.getElementById("zrojo");

// const img = "document/"

// let playeras = [
//     {
//         tag: 1,
//         url: "imagenes/camisaazul.png"  
//     },
//     {
//         tag: 2,
//         url: "imagenes/camisablanca.png"  
//     },
//     {
//         tag: 3,
//         url: "imagenes/camisanegra.png"  
//     },
//     {
//         tag: 4,
//         url: "imagenes/camisaroja.png"  
//     },
// ]

// const elegirRopa = () => {
//     if (cazul.checked){
//         img.url = playeras[0].url
//     }else (cblanco.checked){
//         img.url = playeras[1].url
//     }else (cnegro.checked){
//         img.url = playeras[2].url
//     }else (crojo.checked){
//         img.url = playeras[3].url
//     }
// }


// let pantalones = [
//     {
//         tag: 1,
//         url: "imagenes/pantalonazul.png"  
//     },
//     {
//         tag: 2,
//         url: "imagenes/pantalonblanco.png"  
//     },
//     {
//         tag: 3,
//         url: "imagenes/pantalonnegro.png"  
//     },
//     {
//         tag: 4,
//         url: "imagenes/pantalonrojo"  
//     },
// ]

// const elegirRopa = () => {
//     if (pazul.checked){
//         img.url = pantalones[0].url
//     }else (pblanco.checked){
//         img.url = pantalones[1].url
//     }else (pnegro.checked){
//         img.url = pantalones[2].url
//     }else (projo.checked){
//         img.url = pantalones[3].url
//     }
// }


// let zapatos = [
//     {
//         tag: 1,
//         url: "imagenes/tenisazul.png"  
//     },
//     {
//         tag: 2,
//         url: "imagenes/tenisblanco"  
//     },
//     {
//         tag: 3,
//         url: "imagenes/tenisnegro"  
//     },
//     {
//         tag: 4,
//         url: "imagenes/tenisrojo"  
//     },
// ]

// const elegirRopa = () => {
//     if (zazul.checked){
//         img.url = zapatos[0].url
//     }else (zblanco.checked){
//         img.url = zapatos[1].url
//     }else (znegro.checked){
//         img.url = zapatos[2].url
//     }else (zrojo.checked){
//         img.url = zapatos[3].url
//     }
// }
/*
let nombre= document.getElementById("nombre")
let botonregistro= document.getElementById("botonregistro")

const registrar = () =>
 console.log (nombre)


botonregistro.addEventListener("click", registrar)



