//Prototype
//prototipo é uma propriedade das funções
//a propriedade prototype é um objeto add a uma função quando a mesma é criada
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
};
const monica = new Pessoa('Monica', 26);

console.log(Pessoa.prototype);
console.log(monica.prototype);//monica é um objeto e nao uma função, por isso undefined

//posso pegar a função que criei e adicionar metodos ao objeto prototype
Pessoa.prototype.andar = function(){
    return this.nome + ' andou';
};

console.log(Pessoa.prototype.andar())

//herança de prototipo
//o objeto possui acesso aos metodos e propriedades do prototipo do construtor responsavel
//por criar esse objeto
Pessoa.toString();

//construtores nativos
//Objetos, funções, numeros, strings e outros tipos de dados são criados utilizando construtores.
//esses construtores possuem um prototipo com propriedades e metodos que poderao ser acessados 
//pelo tipo de dado.
const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0);//B
cidade.charAt(0);//R

String.prototype;//para descobrir os metodos que tem acesso, isso é bom para entender js

//é possivel acessar a função do prototipo direto
//é comum principalmente em codigos mais antigos o uso direto de funções do prototipo do construtor Array.
const lista = document.querySelectorAll('li');

//transforma em array
const listaArray = Array.prototype.slice.call(lista);

//Metodo do Objeto vs Prototipo
//nos objetos nativos existem metodos linkados diretamento ao objeto e outros linkados ao prototipo.

const transformaLista = Array.from(lista);
console.log(transformaLista);//isso é uma forma moderna de transformar em Array

//as duas listas acima foram transformadas em array, mas tem diferenca nos metodos que exibe
//quando uma foi em prototype e a outra em array normal
console.log(Object.getOwnPropertyNames(Array));

console.log(Object.getOwnPropertyNames(Array.prototype));

console.log(monica.constructor.name);

const Carro = {
    marca: 'Ford',
    preco: 5000,
    andar(){
        return this.marca + ' andou'
    }
}

console.log(Carro.marca.toUpperCase('Ford'));

//EXERCICIOS
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function(){
    return `Nome completo: ${this.nome} ${this.sobrenome}`
};

const pedro = new Pessoas('Pedro', 'Dias', 28);
console.log(pedro.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;//HTMLLIElement
li.click;//function
li.innerText;//String
li.value;//Number
li.hidden;//Boolean
li.offsetLeft;//Number
li.click();//undefined

console.log(li.constructor.name);
console.log(li.click.constructor.name);
console.log(li.innerText.constructor.name);
console.log(li.value.constructor.name);
console.log(li.hidden.constructor.name);
console.log(li.offsetLeft.constructor.name);
console.log(li.click());

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name);//Boolean
