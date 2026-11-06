//Function
//toda função é criada com o contructor function e por isso herda as suas propriedades e metodos
function areaQuadrado(lado){
  return lado * lado;
};

const perimetroQuadrado = new Function('lado', 'return lado * 4');
console.log(perimetroQuadrado);


//Propriedades
//Function.length retorna o total de argumentos da função
//Function.name retorna uma string com o nome da função
function somar(n1, n2){
  return n1 + n2;
};

console.log(somar(2,2));
console.log(somar.length);//total de argumentos
console.log(somar.name);//exatamente o nome da função


//function.call()
//function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

//usando call eu posso passar um novo valor de this
function darOi(nome){
  console.log('Oi para você' + nome)
};

console.log(darOi.call({/*esse primeiro valor é a referencia do this*/}, ' Mônica'));

const carro = {
  marca: 'Ford',
  ano: 2026
}

function descricaoCarro(){
  console.log(this.marca + ' ' + this.ano);
};

console.log(descricaoCarro.call(carro));//com call eu possa chamar o objeto
console.log(descricaoCarro.call({marca: 'Honda', ano: 2019}));//e com call eu posso substituir

//o call é pra qualquer função, exemplo: forEach, map e etc


//This
//O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). 
//Podemos trocar a referência do método ao this, utilizando o call().
const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach.call(carros, (item)=>{
  console.log(item);
});

//exemplo real de uso:
function Dom(seletor){
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe){
  this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');

console.log(lista);


//Array's e call
//É comum utilizarmos o call() nas funções do protótipo do construtor Array. 
//Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like).
const frutas = ['Uva', 'Maçã', 'Banana'];
console.log(Array.prototype.pop.call(frutas));

console.log(frutas);


//Array-like
//vamos utilizar isso que foi explicado acima quando tivermos um objeto que se parece com array
const li = document.querySelectorAll('li');//todo objeto que for array-like eu vou conseguir interagir com os metodos

const filtro = Array.prototype.filter.call(li, function(item){
  return item.classList.contains('ativo');
});

console.log(filtro);


//function.apply()
//o apply consegue receber um array
const numeros = [3,4,6,1,34,44,32];
console.log(Math.max.apply(null, numeros));



//Apply vs Call
//A única diferença é a array como segundo argumento.
const li2 = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
  return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(li2, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li2, [itemPossuiAtivo]);


//bind()
//Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar 
//a mesma com o novo contexto de this.
const li3 = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li3, function(item) {
  return item.classList.contains('ativo');
});

filtrarLi();


//Argumentos e bind
const carro2 = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

const honda = {
  marca: 'Honda'
}

const acelerarHonda = carro2.acelerar.bind(honda);

console.log(acelerarHonda(300,20));


//Argumentos Comuns
//quando tem uma função que eu uso sempre o mesmo argumento, posso passar com bind
function imc(altura, peso){
  return peso / (altura * altura);
};

const imc80 = imc.bind(null, 1.80);

console.log(imc80(70));
console.log(Math.ceil(imc80(70)));


//EXERCICIOS
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll('p');

const somaTotal = Array.prototype.reduce.call(p, (acumulador, item)=>{
  return acumulador + item.innerText.length;
}, 0);

console.log(somaTotal)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novoElemento(tag, classe, conteudo){
  const elemento = document.createElement(tag);
  if(classe){
    elemento.classList.add(classe);
  }else{
    null
  }
  
  if(conteudo){
    elemento.innerHTML = conteudo;
  }else{
    null
  };

  return elemento;
}

console.log(novoElemento('h1', 'ativo', 'Você é foda'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const elemento2 = novoElemento.bind(null, 'h1', 'titulo');

console.log(elemento2('oi mônica'));


//MAIS EXERCICIOS
// Crie uma função chamada calcularDesconto
// que receba o preço de um produto e a
// porcentagem de desconto.
//
// A função deve retornar o preço final.
//
// Depois, utilizando as propriedades de Function:
// Exiba o nome da função.
// Exiba quantos parâmetros ela possui.
// Execute a função com preço 200 e desconto 15.



// Crie uma função chamada apresentarPessoa
// que utilize this para retornar uma frase
// contendo o nome e a idade da pessoa.
//
// Utilize call() para executar essa função
// com os dois objetos abaixo.
//
// Resultado esperado:
// "Mônica tem 26 anos"
// "Ana tem 32 anos"

const pessoa1 = {
  nome: 'Mônica',
  idade: 26
};

const pessoa2 = {
  nome: 'Ana',
  idade: 32
};



// Crie uma função chamada calcularSalario
// que receba um valor de bônus.
//
// A função deverá utilizar this.salario
// para somar o salário ao bônus.
//
// Utilize call() para calcular o salário
// dos dois funcionários.
//
// Bônus de João: 500
// Bônus de Maria: 1000

const funcionario1 = {
  nome: 'João',
  salario: 3000
};

const funcionario2 = {
  nome: 'Maria',
  salario: 4500
};



// Crie uma função chamada descreverProduto
// que utilize this.nome e this.preco.
//
// A função deverá receber um argumento
// chamado desconto.
//
// Retorne uma frase com o nome do produto
// e seu preço após o desconto.
//
// Execute utilizando call().
//
// Resultado esperado:
// "Notebook custa R$ 2700"

const produto = {
  nome: 'Notebook',
  preco: 3000
};

// Considere desconto como porcentagem.
// Utilize 10% de desconto.
  