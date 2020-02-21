
const cipher = {
  encriptar,
  desencriptar
}

function encriptar (texto,offset){
  let palabraEncriptada="";
  for (let i = 0 ; i < texto.length ; i++){
    let mayusculas= texto.toUpperCase ();
    let numeroEnAscii = texto.charCodeAt(i);
    let formulaEncriptar = ((numeroEnAscii-65+parseInt(offset))%26+65);
    palabraEncriptada += String.fromCharCode (formulaEncriptar);

    return palabraEncriptada;

  }
}
function desencriptar (palabraEncriptada,offset){
  let palabraDecifrada='';
  for(let i = 0; i< palabraEncriptada.length ; i++){
    let mayusculas= palabraEncriptada.toUpperCase ();
    let numeroEnAscii = palabraEncriptada.charCodeAt(i);
    let formulaDesencriptar = ((numeroEnAscii+65-parseInt(offset))%26+65);
desencriptar+=String.fromCharCode(palabraDecifrada);
return palabraDecifrada

  }
}
export default cipher;
