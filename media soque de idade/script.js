var idades = []
var soma = 0
var media = 0
for (var i = 0; i < 8; i++) {
    var idade = Number(prompt("Digite a idade da pessoa " + (i + 1) + ":"))
    idades[i] = idade
    soma += idade
}
media = soma / 8
alert("A média de idade das pessoas cadastradas é: " + media)