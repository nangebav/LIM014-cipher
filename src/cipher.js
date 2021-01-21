const cipher = {
  // ...
};

//Evento para cifrar

botonCifrar.addEventListener("click",()=>{
  let numero = inputDesplazar.value;
  let textoIngresado = inputIngresar.value;
  let textoCifrado = " ";

    //Identifico el N° ascii del texto ingresaado
    //0 indica la posición inicial del string, aquí aplicar for
  for (let i = 0; i < textoIngresado.length; i++) {
    //Traigo la posición ascii de la letra ingresada en message - Coloco 0 para indicar la posición inicial del string, aquí aplicar for
  let numeroAscii= textoIngresado.charCodeAt(i);
  
  if(numeroAscii >= 65 && numeroAscii <= 90) {
    //Aplico la fórmula de Cifrado César para el desplazamiento
    let cifradoMayuscula = (numeroAscii-65+parseInt(numero))%26+65;
     textoCifrado += String.fromCharCode(cifradoMayuscula);
     inputResultado.value = textoCifrado;
    }   
    
      else if (numeroAscii >= 97 && numeroAscii <= 122) {
      let cifradoMinuscula = (numeroAscii-97+parseInt(numero))%26+97;
      textoCifrado += String.fromCharCode(cifradoMinuscula);
      inputResultado.value = textoCifrado;
      
    }

    else if (numeroAscii >= 48 && numeroAscii <= 57) {
      let cifradoNumero = (numeroAscii-48+parseInt(numero))%10+48;
      textoCifrado += String.fromCharCode(cifradoNumero);
      inputResultado.value = textoCifrado;
      
    }
    
      else if (numeroAscii <= 32 ) {
      textoCifrado += " ";
      inputResultado.value = textoCifrado;
    }
  } 

});

botonDescifrar.addEventListener("click",()=>{
  let numero = inputDesplazar.value;
  let textoIngresado = inputIngresar.value;
  let textoCifrado = " ";

  for (let i = 0; i < textoIngresado.length; i++) {
  let numeroAscii= textoIngresado.charCodeAt(i);
  
  if(numeroAscii >= 65 && numeroAscii <= 90) {
    //Aplico la fórmula de Cifrado César para el desplazamiento
    let cifradoMayuscula = (numeroAscii-90-parseInt(numero))%26+90;
     textoCifrado += String.fromCharCode(cifradoMayuscula);
     inputResultado.value = textoCifrado;
    }       
      else if (numeroAscii >= 97 && numeroAscii <= 122) {
      let cifradoMinuscula = (numeroAscii-122-parseInt(numero))%26+122;
      textoCifrado += String.fromCharCode(cifradoMinuscula);
      inputResultado.value = textoCifrado;
    }

    else if (numeroAscii >= 48 && numeroAscii <= 57) {
      let cifradoNumero = (numeroAscii-57-parseInt(numero))%10+57;
      textoCifrado += String.fromCharCode(cifradoNumero);
      inputResultado.value = textoCifrado;
      
    }

      else if (numeroAscii <= 32 ) {
      textoCifrado += " ";
      inputResultado.value = textoCifrado;      
    }   
  } 
});


MediaElementAudioSourceNode
export default cipher;
