const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
var visibilidade = true;

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value); 
    mensagem.value = textoEncriptado;         
    //const oculta = ocultaExibe();
    const oculta = ocultar();
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];  
   stringEncriptada = stringEncriptada.toLowerCase();

   for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }    
   }   
   return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desEncriptar(inputTexto.value); 
    mensagem.value = textoDesencriptado;     
    //const oculta = ocultaExibe();
    const oculta = ocultar();
      
}

function desEncriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];  
   stringDesencriptada = stringDesencriptada.toLowerCase();

   for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    
   }
   return stringDesencriptada;
}
function btncopiar(){
   // var btnCopiar = document.getElementById("btnCopiar");// pega o texto no campo e armazena na variavel
        navigator.clipboard.writeText(mensagem.value); //copia o textod entro cliboard para transferencia
        alert("Texto copiado foi:\n" + mensagem.value) ;  
        //const exibir = ocultaExibe();
        const exibe = exibir();

}
/* Função para coultar e exibir div na página html*/
function exibir() {
    document.getElementById("dvOcultar").style.display = "block";
}

function ocultar() {
    document.getElementById("dvOcultar").style.display = "none";
}

function ocultaExibe() {
    var div = document.getElementById("dvOcultar");
    var disp = div.style.display;
    div.style.display = disp == 'none' ? 'block' : 'none';
}