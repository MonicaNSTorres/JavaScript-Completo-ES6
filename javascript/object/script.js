//Object
//todo objeto é criado com o constructor object, por isso herda as propriedades e metodos do prototype
const pessoa = new Object({
  nome: 'Mônica'
});

console.log(pessoa);


//Object.create()
//isso é bom porque vou conseguir criar um outro objeto utilizando os metodos e propriedades que o outro já tem
const carro = {
  marca: 'Marca',
  rodas: 4,
  init(valor){
    this.marca = valor
    return this;
  },
  acelerar(){
    return this.marca + ' acelerou';
  },
  buzinar(){
    return this.marca + ' buzinou';
  }
};

const honda = Object.create(carro);
honda.marca = 'Honda';

console.log(honda);

//mais uma forma de criar objetos a partir do prototipo
const ferrari = Object.create(carro).init('Ferrari');
console.log(ferrari.acelerar());

const bmw = Object.create(carro).init('BMW');
console.log(bmw.buzinar());


//Object.assign()
//Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos 
//demais objetos. O assign irá modificar o objeto alvo.
const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
};

const moto = {
  rodas: 2,
  capacete: true
};

Object.assign(moto, funcaoAutomovel);
console.log(moto);//ele vai mudar sempre minha propriedade e nao a funcao automovel


//Object.defineProperties()
//Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. 
//uma forma de criar a propriedade dentro do objeto sem ser mutavel.
const aviao = {};

Object.defineProperties(aviao, {
  rodas: {
    value: 6,
    configurable: false,//impede deletar e mudança de valor
    writable: true,//impede mudança de valor
  }
});

aviao.rodas = 6;
console.log(aviao);


//Get e Set
//É possível definirmos diferentes comportamentos para get e set de uma propriedade. 
//Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é 
//ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.
const moto2 = {}
Object.defineProperties(moto2, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto2.velocidade = 200;
console.log(moto2.velocidade);


//Object.getOwnPropertyDescriptors()
Object.getOwnPropertyDescriptors(Array);//Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);//Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');//Puxa de uma única propriedade


//Object.keys(obj), Object.values(obj) e Object.entries(obj)
//Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. 
//Object.values(obj) retorna uma array com os valores do objeto. 
//Object.entries(obj) retorna uma array com array's contendo a chave e o valor.
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro3 = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(carro3);
// ['marca', 'ano']
Object.values(carro3);
// ['Ford', 2018]
Object.entries(carro3);
// [['marca', 'Ford'], ['ano', 2018]]


//Object.getOwnPropertyName(obj)
//uma forma de voce verificar se tem ou nao
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro4 = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro4);
// ['marca', 'ano']


//Object.getPrototypeOf() e Object.is()
//serve para mostrar qual é o prototipo daquele valor que passamos pra ele
const frutas = ['Banana'];
const frutas1 = ['Banana'];

console.log(Object.getPrototypeOf(frutas));//vai me retornar o prototipo de array

console.log(Object.is(frutas, frutas1));//serve para verificar se todos os prototipos sao iguais
//nesse caso me deu false, por que sao objetos diferentes

const novaFrutas = frutas1;
console.log(Object.is(novaFrutas, frutas1));//vai me retornar true, por que só estou fazendo referencia


//Object.freeze(), Object.seal() e Object.preventExtensions()
//Object.freeze() vai congelar meu objeto e impedir qualquer mudança nas propriedades. 
//Object.seal() previne a adição de novas propriedades e impede que as atuais sejam mudadas. 
//Object.preventExtensions() previne a adição de novas propriedades, mas permite que eu delete antigas.
const carro5 = {
  marca: 'Ford',
  ano: 2026
};

console.log(Object.freeze(carro5));


//Propriedades e metodos do prototipo
const frutas2 = ['Banana', 'Uva'];
frutas2.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String


//{}.hasOwnProperty('prop') e {}.hasIsEnumerable('prop')
//Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. 
//O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
const frutas3 = ['Banana', 'Uva'];

frutas3.hasOwnProperty('map');//false
Array.hasOwnProperty('map');//false
Array.prototype.hasOwnProperty('map');//true

Array.prototype.propertyIsEnumerable('map');//false
window.propertyIsEnumerable('innerHeight');//true


//{}.isPrototype(valor)
//verifica se é o prototipo do valor passado
console.log(Array.prototype.isPrototypeOf(frutas));


//{}.toString()
//Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. 
//Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).
const frutas5 = ['Banana', 'Uva'];
frutas5.toString(); // 'Banana,Uva'
typeof frutas5; // object
Object.prototype.toString.call(frutas5); // [object Array]

const frase2 = 'Uma String';
frase2.toString(); // 'Uma String'
typeof frase2; // string
Object.prototype.toString.call(frase2); // [object String]

const carro6 = {marca: 'Ford'};
carro6.toString(); // [object Object]
typeof carro6; // object
Object.prototype.toString.call(carro6); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]



//EXERCICIOS
// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDado(dado){
  return Object.prototype.toString.call(dado)
};

console.log(verificarDado('abc'));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};

Object.defineProperties(quadrado, {
  lados:{
    value: 4,
    configurable:false,
    writable:false,
  }
});

quadrado.lados = 6;
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));

console.log(Object.getOwnPropertyNames(Array.prototype));