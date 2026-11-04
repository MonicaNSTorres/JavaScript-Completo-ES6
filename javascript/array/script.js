//Array

//Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; //acessando propriedade de um obj

//Construção de Arrays
//toda array herda os metodos e propriedades do prototipo do construtor array
const carros1 = new Array('Corola', 'Ford', 'Honda');

console.log(carros1[0]);

carros1[3] = 'Fiat';//adicionar mais items no array
carros1[0] = 'Ferrari'; //substituir um item do array
carros1.length;

//Array.from()
//transforma um array que se parece com um objeto em um array real
const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

console.log(arrayLi);

//Array.isArray()
//serve para verificar se é uma array ou nao
console.log(Array.isArray(li));


//Array.of(), Array() e new Array()
console.log(Array.of(1,6,8,4,10));//cria um array com os argunetos que vou passando

console.log(new Array(5));//se vc nao passar mais items, ele vai achar que vc ta querendo criar uma array com 5 items

console.log(Array(2,6,5,7));//cria o array normal


//Metodos modificadores [].sort()
const frutas = ['maça', 'manga', 'banana'];
console.log(frutas.sort());//organiza por ordem alfabetica, pra numeros não serve, ele só coloca na ordem


//[].unshift() e [].push()
const carros3 = ['Ford', 'Fiat', 'VW'];
carros3.unshift('BMW', 'Cadilac');//adiciona elementos no inicio do array
console.log(carros3);
console.log(carros3.length);

carros3.push('Ferrari', 'BYD');//adiciona elementos no final do array
console.log(carros3);
console.log(carros3.length);

//[].shift() e [].pop()
const primeiroCarro = carros3.shift();//remove o primeiro elemento do array e retorna ele
console.log(primeiroCarro);

const ultimoCarro = carros3.pop();//remove o ultimo elemento do array e retorna ele
console.log(ultimoCarro);


//[].reserve()
console.log(carros3.reverse());//inverte a ordem do array


//[].splice()
//diciona valores na array a partir do index. 
//Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros4.splice(1, 0, 'Kia', 'Mustang'); // []
carros4; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros4.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros4; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']


//[].copyWithin(alvo, inicio, final)
//a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. 
//Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.
['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']


//[].fill()
//ele preenche o array de acordo com o valor que eu passar
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Manga'));

//posso pedir para começar a partir de um index especifico
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Manga', 2));

//Metodos de acesso [].concat()
//os metodos de acesso nao modificam o array, ele continua a mesma coisa
const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];

const transportes = transporte1.concat(transporte2);
console.log(transportes);

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
console.log(maisTransportes);

//[].includes(), [].indexOf() e [].lastIndexOf()
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

//verifica se a array possui o valor e retorna true ou false
linguagens.includes('css'); //true
linguagens.includes('ruby'); //false

//verifica se a array possui valor e retorna o index do primeiro valor na array
linguagens.indexOf('python'); //4
linguagens.indexOf('js'); //2

//retorna o index do ultimo
linguagens.lastIndexOf('js'); //5


//[].join()
//junta todos os valores da array e retorna uma string com ele
let htmlString = '<h2>Título Principal</h2>'

htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');

console.log(htmlString);

//[].slice(inicio, final) 
//retorna os itens da array começando pelo início e indo até o valor de final.
//muito usado para clonar o array e colocar em uma variavel nova
const dias = ['segunda', 'terça', 'quarta', 'quinta', 'sexta'];

console.log(dias.pop());
console.log(dias.slice(1, 3));
console.log(dias.slice(2));

const cloneDias = dias.slice();
console.log(cloneDias);



//EXERCICIOS
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValor = comidas.shift();
console.log(primeiroValor);

const ultimoValor = comidas.pop();
console.log(ultimoValor);

const inicioComidas = comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const finalComidas = comidas.push('Arroz');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

console.log(estudantes.sort());

console.log(estudantes.reverse());

if(estudantes.includes('Joana') ? console.log('Faz parte') : console.log('Não faz parte'));

if(estudantes.includes('Juliana') ? console.log('Faz parte') : console.log('Não faz parte'));


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join 

const htmlUl = html.split('section').join('ul');
const htmlLi = htmlUl.split('div').join('li');

console.log(htmlLi);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const cloneCarros = carros.slice();
console.log(cloneCarros);

console.log(carros.pop());
console.log(carros);