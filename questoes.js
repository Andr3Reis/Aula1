// Questão 1

let numero = -5;

console.log("Questão 1");

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

//Questão 2

let nota1 = 6;
let nota2 = 8;

let media = (nota1 + nota2) / 2;

console.log("Questão 2");

if (media >= 7) {
    console.log("Parabéns! Você foi aprovado com média", media.toFixed(2));
} else {
    console.log("Infelizmente você não foi aprovado. Sua média foi", media.toFixed(2));
}

//Questão 3

let anoAtual = new Date().getFullYear();

let anoNascimento = 2010;

let idade = anoAtual - anoNascimento;

console.log("Questão 3");

if (idade >= 16) {
    console.log("Você pode votar este ano.");
} else {
    console.log("Você não pode votar este ano.");
}

//Questão 4

let valor1 = 500;
let valor2 = 500;

console.log("Questão 4");

if (valor1 > valor2) {
    console.log("O maior valor é:", valor1);
} else if (valor2 > valor1) {
    console.log("O maior valor é:", valor2);
} else {
    console.log("Os valores são iguais:", valor1);
}

//Questão 5


let valor3 = 10;
let valor4 = 11;

console.log("Questão 5");

if (valor3 < valor4) {
    console.log("Os valores em ordem crescente:", valor3, valor4);
} else if (valor3 < valor4) {
    console.log("Os valores em ordem crescente:", valor4, valor3);
} else {
    console.log("Os valores são iguais:", valor3, valor4);
}

//Questão 6

let valor5 = 5;
let valor6 = 17;
let valor7 = 25;

console.log("Questão 6");

if (valor5 >= valor6 && valor5 >= valor7) {
    console.log("O maior valor é:", valor1);
} else if (valor6 >= valor5 && valor6 >= valor7) {
    console.log("O maior valor é:", valor6);
} else {
    console.log("O maior valor é:", valor7);
}

//Questão 7
let valor10 = 30;
let valor20 = 41;
let valor30 = 16;

console.log("Questão 7");

let soma = valor10 + valor20 + valor30 - Math.min(valor10, valor20, valor30);
console.log("A soma dos dois maiores valores é:", soma);

//Questão 8
let valor01 = 10;
let valor02 = 14;
let valor03 = 15;

let listaValores = [valor01, valor02, valor03];
listaValores.sort(function(a, b) {
    return a - b;
});

console.log("Questão 8");
console.log("Os valores em ordem crescente:", listaValores);

//Questão 9
let numero1 = 50;

console.log("Questão 9");

if (numero1 % 2 === 0) {
    console.log(numero1 + " é par");
} else {
    console.log(numero1 + " é ímpar");
}

//Questão 10
let golsTimeA = 2;
let golsTimeB = 3;

console.log("Questão 10");

if (golsTimeA > golsTimeB) {
    console.log("O vencedor é o TIME A");
} else if (golsTimeB > golsTimeA) {
    console.log("O vencedor é o TIME B");
} else {
    console.log("EMPATE");
}

