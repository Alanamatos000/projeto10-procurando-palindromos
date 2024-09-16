// Solicitar ao usuário que informe uma palavra
let word = prompt("Informe uma palavra para verificar se é um palíndromo:");
// Transformar a palavra em minúsculas para comparação sem distinção de maiúsculas e minúsculas
word = word.toLowerCase();
// Reverter a palavra
let reversedWord = word.split('').reverse().join('');
// Verificar se a palavra é um palíndromo
if (word === reversedWord) {
    console.log("A palavra informada é um palíndromo!");
} else {
    console.log(`A palavra informada NÃO é um palíndromo.\nPalavra normal: ${word}\nPalavra invertida: ${reversedWord}`);
}