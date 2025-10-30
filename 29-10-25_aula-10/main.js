// console.log("oi gente");

function cifrarAtbash(texto) {
    let saida = ""
    for(let i=0; i<texto.length; i++) {
        let letterIn = texto[i]
        // console.log("letterIn", letterIn);
        let letterOut = " "
        if (letterIn != " ") {
            let pos = maiusculo.search(letterIn)
            if (pos != -1) {
                letterOut = maiusculo[25 - pos]
            } else {
                pos = minuscula.search(letterIn)
                letterOut = minuscula[25 - pos]
            }
        }
        // console.log("letterOut", letterOut);
        saida = saida + letterOut
    }
    // console.log("saida", saida)
    return saida
}

let cifrado = cifrarAtbash("ALFACE cenoura");
console.log("cifrado", cifrado);
let decifrado = cifrarAtbash(cifrado);
console.log("decifrado", decifrado);
