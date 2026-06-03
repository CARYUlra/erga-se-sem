var numeros = []
for (var i = 0; i < 15; i++) {
    var numero = Number(prompt("Digite o número " + (i + 1) + ":"))
    numeros[i] = numero
}
alert("Vetor inteiro: " + numeros)
for (var i = 0; i < 15; i++) {
    if (numeros[i] % 10 === 0) {
        alert("O número na posição " + i + " é múltiplo de 10: " + numeros[i])
    }
}