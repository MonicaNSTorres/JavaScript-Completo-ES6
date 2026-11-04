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
//arredonda o numero de acordo com a quantidade de casas decimais que voce tem e que voce passa
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
const arrayNumeros = numeros.split(", ");
const numeroMaximo = Math.max(...arrayNumeros);//spread

console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco){
    preco = +preco.toLowerCase().replace('r$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    //console.log(preco);

    return preco;
}

let soma = 0;
listaPrecos.forEach((item)=>{
    soma += limparPreco(item);
})

console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

limparPreco(listaPrecos[1]);

//MAIS EXERCICIOS
// Abaixo temos uma string contendo as notas de um aluno.
// Transforme essa string em uma array de números.
// Encontre a maior nota utilizando Math.max().
// Encontre a menor nota utilizando Math.min().
// Calcule a média de todas as notas utilizando forEach().
// Arredonde a média para 2 casas decimais.

// Exiba no console:
// Maior nota:
// Menor nota:
// Média final:

const notas = '7.5, 8.2, 6.9, 9.8, 5.5, 8.7';
const arrayNotas = notas.split(", ");
const maiorNota = Math.max(...arrayNotas);
const menorNota = Math.min(...arrayNotas);

let somaNotas = 0;
arrayNotas.forEach((item)=>{
    somaNotas += item;
});

const media = arrayNotas.length;

console.log(`Maior nota: ${maiorNota}`);
console.log(`Maior nota: ${menorNota}`);
console.log(`Média final: ${media}`);



// Abaixo temos uma array com preços de produtos.
// Observe que os valores possuem espaços,
// letras maiúsculas/minúsculas e vírgulas.

// Crie uma função chamada limparProdutos() que:
// 1. Remova o símbolo R$ (maiúsculo ou minúsculo).
// 2. Remova os espaços desnecessários.
// 3. Substitua a vírgula por ponto.
// 4. Converta o preço para Number.
// 5. Arredonde para 2 casas decimais.
// 6. Retorne o preço convertido.
// Utilize forEach() para somar todos os preços.
// Calcule um desconto de 10% sobre o total.
// Exiba no console:
// Valor total dos produtos:
// Valor do desconto:
// Valor final com desconto:
// Formate os valores finais em reais (R$)
// utilizando toLocaleString().

const produtos = [
  'R$ 45,999',
  ' r$ 120,50 ',
  'R$ 89,90',
  'r$  250,755',
  ' R$ 35 '
];

function limparProdutos(produto){
    produto = +produto.toLowerCase().replace('r$', '').trim().replace(',', '.');
    produto = +produto.toFixed(2);

    return produto;
};

let somaProdutos = 0;
let desconto = 0;
let valorFinal = 0;
produtos.forEach((item)=>{
    somaProdutos += limparProdutos(item);
    desconto = (somaProdutos * 10) / 100; 
    valorFinal = somaProdutos - desconto;
});

console.log(`Valor total dos produtos: ${somaProdutos.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})}`);
console.log(`Valor do desconto: ${desconto.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})}`);
console.log(`Valor final com desconto: ${valorFinal.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})}`);

limparProdutos(produtos[1]);