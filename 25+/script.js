var idades = []
for (var i = 0; i < 7; i++) {
    var idade = Number(prompt("Digite a idade da pessoa " + (i + 1) + ":"))
    idades[i] = idade
}
for (var i = 0; i < 7; i++) {
    if (idades[i] > 25) {
        alert("A pessoa na posição " + i + " tem mais de 25 anos e tem " + idades[i] + " anos.")
    }
}