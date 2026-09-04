console.log("Porra");

var Variavel01 = "oi, ";
let Variavel02 = "Tudo Bem?";
const Variavel03 = "Vocês são lindos";

// Contatenação de variaveis
console.log(Variavel01 + Variavel02);
console.log(Variavel01, Variavel02);

Variavel01 = "Olá! ";
console.log(Variavel01, Variavel02);

// Variavel01 = "Hello";
// Variáveis de tipo constante não podem receber um novo valor que sobreescreva o original

let Teste = "texto";
console.log(typeof(Teste));
Teste = 2;
console.log(typeof(Teste));
Teste = {nome: "João", idade: 38};
console.log("O tipo agora é: ", typeof(Teste));
Teste = [1, 2];
console.log("O resultado do tipo de array é ", typeof(Teste));