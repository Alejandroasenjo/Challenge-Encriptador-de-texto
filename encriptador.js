function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let mainlocker = document.getElementById("mainlocker");

    let textoCifrado = texto 
     .replace(/e/gi, "enter")
     .replace(/i/gi, "imes")
     .replace(/a/gi, "ai")
     .replace(/o/gi, "ober")
     .replace(/u/gi, "ufat");

 if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    mainlocker.src = "./img/encriptado.png";   
 }  else {
    mainlocker.src = "./img/mainlocker.png";
    tituloMensaje.textContent = "No se ha encontrado ningún mensaje";
    parrafo.textContent = "Ingrese el texto a encriptar o desencriptar";
    swal({
        title: "Ooops!",
        text: "Debes ingresar un texto",
        icon: "warning"
      });
 }                    
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let mainlocker = document.getElementById("mainlocker");

    let textoCifrado = texto
       .replace(/enter/gi, "e")
       .replace(/imes/gi, "i")
       .replace(/ai/gi, "a")
       .replace(/ober/gi, "o")
       .replace(/ufat/gi, "u");

        if (texto.length != 0) {
          document.getElementById("texto").value = textoCifrado;
          tituloMensaje.textContent = "Texto desencriptado con éxito";
          parrafo.textContent = "";
          mainlocker.src = "./img/desencriptado.png";
        } else {
            mainlocker.src = "./img/mainlocker.png";
            tituloMensaje.textContent = "No se ha encontrado ningún mensaje";
            parrafo.textContent = "Ingrese el texto a encriptar o desencriptar";
            swal({
                title: "Ooops!",
                text: "Debes ingresar un texto",
                icon: "warning"
              });
        }
}