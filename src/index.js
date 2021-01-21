const iniciar = document.getElementById ("iniciar"); //para ir a la segunda página//
const paginaUno =document.getElementById ("paginaUno");
const paginaDos =document.getElementById ("paginaDos");

paginaUno.style.display ="block";
paginaDos.style.display ="none";

iniciar.addEventListener("click",()=>{
    
    paginaUno.style.display = "none" ;
    paginaDos.style.display = "block";
    });

//Declarando variables para cifrar y descifrar
const inputIngresar = document.getElementById ("inputIngresar"); 
const inputResultado = document.getElementById ("inputResultado");
const inputDesplazar = document.getElementById ("inputDesplazar");
const botonCifrar = document.getElementById ("botonCifrar");
const botonDescifrar = document.getElementById ("botonDescifrar");





import cipher from './cipher.js';

console.log(cipher);
