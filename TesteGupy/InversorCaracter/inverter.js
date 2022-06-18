console.log(inverter("sametsiS tegraT ad oiráigatse ovoN"))




function inverter(palavra) {
    var palavraInvertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;
}
