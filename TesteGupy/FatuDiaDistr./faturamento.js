'use strict'


const valores = getValues()
let valoresReais = valores.filter((x) => { return x > 0 })

console.log("Menor valor: " + Math.min(...valoresReais))
console.log("Maior valor: " + Math.max(...valoresReais))
console.log("Valor médio: " + (somarFaturamento(valoresReais) / valoresReais.length).toFixed(4))

function getValues() {
    const fs = require('fs')

    let rawdata = fs.readFileSync('dados.json')
    let dados = JSON.parse(rawdata)

    return dados.map((x) => { return x.valor })
}

function somarFaturamento(valores) {
    let soma = 0

    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    return soma
}