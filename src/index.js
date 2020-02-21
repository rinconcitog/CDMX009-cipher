import cipher from './cipher.js';

function myFunction() {

  document.getElementById("contenido").innerHTML = "<h1>Introduzca una palabra para obtener una contraseña</h1> "+
  "<form>"+
  "<label for='texto'>introduzca la palabra:</label><br>"+
  "<input id='texto' type='text'class='campo'name='palabra'><br>"+
  "<label for='offset'>introduzca el número a recorrer:</label><br>"+
  "<input id='offset' type='number'min='1' max='100'class='campo'name='numero'> <br> "+
  "<button id='botonEncriptar'class='botones' onclick='myFunction2()'>Encriptar</button>"





}
function myFunction2() {

  document.getElementById("contenido").innerHTML = "<h1>Contraseña Obtenida</h1> "+

  "</form>"+
  "<button class='botones' onclick='myFunction3()'>Ir a desencriptar</button>";



}


function myFunction3() {
  document.getElementById("contenido").innerHTML = "<h1>desencriptar contraseña</h1> "+
    "<form>"+
    "<label for='numero'>introduzca la palabra encriptada:</label><br>"+
    "<input id='palabra' type='text'class='campo'name='palabra'><br>"+
    "<label for='numero'>introduzca el número a recorrer:</label><br>"+
    "<input id='offset' type='number'class='campo'name='numero'> <br> "+
    "</form>"+
    "<button class='botones' onclick='myFunction4()'>desencriptar</button>";

}
    function myFunction4() {
      document.getElementById("contenido").innerHTML = "<h1>palabra desencriptada</h1> "+
        "<form>"+
        "<button class='botones' onclick='myFunction5()'>Volver a inicio</button>";

}
console.log(Cipher);


console.log(cipher);
