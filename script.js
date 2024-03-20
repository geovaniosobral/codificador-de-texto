const textArea = document.querySelector("textArea");
const mensagem = document.querySelector(".mensagem");

let matriszCodigo = [["e", "inter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
console.table(matriszCodigo);

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function encriptar(stringEmcriptada) {
    
    let matriszCodigo = [["e", "inter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEmcriptada = stringEmcriptada.toLowerCase();

    for (let i = 0; i < matriszCodigo.length; i++) {
        if (stringEmcriptada.includes(matriszCodigo[i][0])) {
            stringEmcriptada = stringEmcriptada.replaceAll(matriszCodigo[i][0], matriszCodigo[i][1]);
        }
    }

    return stringEmcriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";

}


function desencriptar(stringDesencriptada) {
    let matriszCodigo = [["e", "inter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matriszCodigo.length; i++) {
        if (stringDesencriptada.includes(matriszCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matriszCodigo[i][1], matriszCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}