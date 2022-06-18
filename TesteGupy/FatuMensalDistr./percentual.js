const faturamentos = [
    {
        estado: "SP",
        faturamento: 67836.43
    },
    {
        estado: "RJ",
        faturamento: 36678.66
    },
    {
        estado: "MG",
        faturamento: 29229.88
    },
    {
        estado: "ES",
        faturamento: 27165.48
    },
    {
        estado: "Outros",
        faturamento: 19849.53
    },

]

const values = faturamentos.map((x) => { return x.faturamento })
const resultadoTotal = somarFaturamento(values)


for (let i = 0; i < faturamentos.length; i++) {
    const percentualFaturamento = (faturamentos[i].faturamento / resultadoTotal * 100).toFixed(2)
    console.log(faturamentos[i].estado + " " + percentualFaturamento + "%")

}

function somarFaturamento(valores) {
    let soma = 0

    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    return soma
}