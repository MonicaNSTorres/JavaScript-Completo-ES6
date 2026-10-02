function quadrado(lado){
    return lado * lado;
}

console.log(quadrado(4));

/*const idade = window.prompt("Qual a sua idade?");

function verificarIdade(idade){
    if(idade >= 18){
        console.log('Acesso liberado.')
    }else{
        console.log('Acesso negado.')
    }
}

console.log(verificarIdade(idade));*/

function frase(){
    return 'Olá';
}

var saudacao = frase() + 'Mônica';

console.log(saudacao);

function sorteio(min, max){
    return Math.random() - (max - min) + min;
}

console.log(sorteio(5, 10));

//evento pode ser funcao de callback
addEventListener('click', function(){
    return console.log('oi');
})

//uma funcao pode retornar undefined sem o return escrito

//uma funcao pode retornar diferentes tipos de dados
function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Não é um número';
    }else if(idade > 60){
        return 'Você é idoso';
    }else{
        return 'Você não é idoso';
    }
}

console.log(terceiraIdade(26));

//EXERCICIOS
// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor){
    if(valor === true){
        return true;
    }else{
        return false;
    }
}

console.log(verificaValor(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lados){
    return lados * 4;
}

console.log(perimetroQuadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return (`Nome completo: ${nome} ${sobrenome}`)
}

console.log(nomeCompleto('Mônica', 'Torres'));

// Crie uma função que verifica se um número é par
function verifica(numero){
    if(numero % 2 === 0){
        return 'é par';
    }else{
        return 'é impar';
    }
}

console.log(verifica(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
    return typeof dado;
}

console.log(`O tipo de dado é: ${tipoDeDado(20)}`);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
    console.log('Mônica Nathalia Sousa Torres');
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));

// random de paises aleatorios
var paises = ('Italia', 'Espanha', 'Holanda');

function randomPaises(){
    return paises.
}