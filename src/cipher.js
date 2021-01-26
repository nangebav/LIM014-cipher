const cipher = {
  encode:(numero,textoIngresado)=> {
  let textoCifrado = ""; 

  


//Evento para cifrar

    //Identifico el N° ascii del texto ingresaado
    //0 indica la posición inicial del string, aquí aplicar for
  for (let i = 0; i < textoIngresado.length; i++) {
    //Traigo la posición ascii de la letra ingresada en message - Coloco 0 para indicar la posición inicial del string, aquí aplicar for
  let numeroAscii= textoIngresado.charCodeAt(i);
  
  if(numeroAscii >= 65 && numeroAscii <= 90) {
    //Aplico la fórmula de Cifrado César para el desplazamiento
    let cifradoMayuscula = (numeroAscii-65+parseInt(numero))%26+65;
     textoCifrado += String.fromCharCode(cifradoMayuscula);
    }   
    
      else if (numeroAscii >= 97 && numeroAscii <= 122) {
      let cifradoMinuscula = (numeroAscii-97+parseInt(numero))%26+97;
      textoCifrado += String.fromCharCode(cifradoMinuscula);      
    }

    else if (numeroAscii >= 48 && numeroAscii <= 57) {
      let cifradoNumero = (numeroAscii-48+parseInt(numero))%10+48;
      textoCifrado += String.fromCharCode(cifradoNumero);    
    }
   
    else if (numeroAscii >= 33 && numeroAscii <= 47) {
      let simbolos = (numeroAscii-33+parseInt(numero))%15+33;
      textoCifrado += String.fromCharCode(simbolos);
   }
   
    else if (numeroAscii >= 58 && numeroAscii <= 64) {
      let signos = (numeroAscii-58+parseInt(numero))%7+58;
      textoCifrado += String.fromCharCode(signos); 
    }
    
      else if (numeroAscii <= 32 ) {
      textoCifrado += " ";
    }   
    
    else{
      textoCifrado += textoIngresado[i]
    } 
  }  
  console.log(textoCifrado);
  return textoCifrado;
},

decode:(numero,textoIngresado)=> {
  let textoDescifrado = ""; 

  for (let i = 0; i < textoIngresado.length; i++) {
  let numeroAscii= textoIngresado.charCodeAt(i);
  
  if(numeroAscii >= 65 && numeroAscii <= 90) {
    //Aplico la fórmula de Cifrado César para el desplazamiento
    let cifradoMayuscula = (numeroAscii-90-parseInt(numero))%26+90;
     textoDescifrado += String.fromCharCode(cifradoMayuscula);
    }   

      else if (numeroAscii >= 97 && numeroAscii <= 122) {
      let cifradoMinuscula = (numeroAscii-122-parseInt(numero))%26+122;
      textoDescifrado += String.fromCharCode(cifradoMinuscula);

    }

    else if (numeroAscii >= 48 && numeroAscii <= 57) {
      let cifradoNumero = (numeroAscii-57-parseInt(numero))%10+57;
      textoDescifrado += String.fromCharCode(cifradoNumero);
      
    }

    else if (numeroAscii >= 33 && numeroAscii <= 47) {
      let simbolos = (numeroAscii-47-parseInt(numero))%15+47;
      textoDescifrado += String.fromCharCode(simbolos);
    }

      else if (numeroAscii <= 32 ) {
      textoDescifrado += " "; 
    }  

    else if (numeroAscii >= 58 && numeroAscii <= 64) {
      let signos = (numeroAscii-64-parseInt(numero))%7+64;
      textoDescifrado += String.fromCharCode(signos);
    }
    
    else{
      textoDescifrado += textoIngresado[i]
    } 
  }  
  return textoDescifrado
},
};

export default cipher;
