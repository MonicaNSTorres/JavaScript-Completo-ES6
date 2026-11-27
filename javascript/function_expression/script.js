//Function Expression
//a diferença é que ela é uma expressao que é uma função
const soma = function(a, b){
    return a + b;
};

console.log(soma(2,3));


//Arrow Function
//podemos criar utilizando arrow functions
//muito comum hoje em dia
const dividir = (a, b) => a / b;
console.log(dividir(4,2));

const quadrado = a => a * a;//não é recomendado fazer dessa forma, mas é importante conhecer
console.log(quadrado(4));


//IIFE -  Immediately Invoked Function Expression
//forma antiga de isolar um escopo, pois antigamente os browsers não entendiam modulo
const instrumento = 'Piano';

(()=>{
    const instrumento = 'Guitarra';
    console.log(instrumento);
})();

console.log(instrumento);



//EXERCICIOS
// Remova o erro
const priceNumber = n => + n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function(){
    var nome = 'Mônica';
    console.log(nome);
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
console.log(active);

active(function(){
    console.log('Teste de Active')
});