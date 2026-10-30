//Number

//para verificar se é number
console.log(Number.isNaN('oi'));
console.log(Number.isNaN(26));

//Number.isNaN() e Number.isInteger()
//integer verificar se é um numero inteiro
console.log(Number.isInteger(20));
console.log(Number.isInteger(23.6));

//isNaN verifica se é um metodo de number
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(4 + 5));

//Number.parseFloat() e Number.parseInt()
//parseFloar retorna o numero que tem no meio da string
console.log(Number.parseFloat('10 reais'));
console.log(Number.parseFloat('100.50'));
console.log(Number.parseFloat('R$ 100'));

//parseInt tenta transformar em integral o valor
console.log(Number.parseInt('100 reais'));
console.log(Number.parseInt('23.49'));

console.log(Number.parseInt(50.60, 10));//se passarmos virgula, é por que estamos falando com casa decimal

//n.toFixed(decimais)
//arredonda o numero de acordo com a quantidade de casas decimais que voce tem
const preco = 32.4569;
console.log(preco.toFixed());
console.log(preco.toFixed(3));//me retorna arredondado

//n.toString(radix)
//tranforma o numero em uma string com base no radix. Use 10 para base decimal
console.log(preco.toString(10));

//n.toLocaleString(lang, positions)
//consigo transformar na moeda local
const valorCarro = 108.569;

valorCarro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
//valorCarro.toLocaleString('en-US', {style: 'currency', currency: 'BRL'});
console.log(valorCarro);

//Math
//é um objeto que possui propriedades e metodos
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN10);


//Math.abs(), Math.ceil(), Math.floor() e Math.round()
console.log(Math.abs(-5));//retorna o valor absoluto, transforma negativo em positivo
console.log(Math.ceil(4.8334));//arredonda pra cima, retornando sempre uma integral

console.log(Math.floor(4.8334));//mesma coisa do ceil, porem arredonda pra baixo
console.log(Math.floor(4.3));

console.log(Math.round(4.3));//arredonda para o numero mais proximo

//Math.max(), Math.min() e Math.random()
console.log(Math.max(5,3,60,7,92));//retorna o maior numero da lista
console.log(Math.min(5,3,60,7,92));//retorna o menor numero da lista

console.log(Math.random());//retorna um numero aleatorio de 1 a 100

const aleatorio = Math.floor(Math.random() * 10);//vai me retornar um numero aleatorio de 0 a 20 arredondado
console.log(`Número aleatorio arredondado: ${aleatorio}`);

//consigo pedir um numero aleatorio entre um numero e outro

//eu vou passar um numero maximo e um numero minimo sempre:
//const especifico1 = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;

const especifico2 = Math.floor(Math.random() * (72 - 32 + 1)) + 32;//exemplo na pratica
console.log(especifico2);

//EXERCICIOS
// Retorne um número aleatório
// entre 1050 e 2000
const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(`Número que saiu: ${numeroAleatorio}`);


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const formatadoNumeros = numeros.trim().split(", ");


//console.log(Number.parseFloat(formatadoNumeros))

/*formatadoNumeros.forEach((item)=>{
    const transformado = Number.parseInt(item);

    console.log(Math.max(transformado))
})*/


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

/*const limparPrecos = Number.parseFloat(listaPrecos);
console.log(limparPrecos);*/

let precos = 0;
let total = 0
listaPrecos.forEach((item)=>{   
    if(precos = +item.trim().replace(",", ".").toLowerCase().replace("r$", " ").trimStart()){
        console.log(precos.toFixed());//limpa os preços
    }else{
        total += precos;
        console.log(total)
    }
})


/*listaPrecos.forEach((item)=>{
    item = item.toLowerCase();
    item = item.trim();
    item = item.split('r$', ' ');
});*/

//console.log(formatada)