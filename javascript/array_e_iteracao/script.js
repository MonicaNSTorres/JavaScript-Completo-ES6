//Array e Iteração

//[].ForEach()
//é um metodo de array 
//ele recebe primeiro uma funçaõ de callback que vai ser executada para cada item do array e dentro
//posso passar alguns argumentos que vão ser executados
const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach(function(item, index, array){//item faz referencia liteal ao item, index a posição e array ao principal
  array[index] = 'Teste';//posso modificar a array, se eu modificar, a proxima iteração vai ser na array modificada
  console.log(item);
});

//com arrow function
carros.forEach((item, index, array)=>{
  console.log(item.toUpperCase(), index, array);
});


//Arrow Function
//vai ser bem comum usar arrow function sem a palavra function
const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));//isso é uma arrow function

li.forEach((item, index) => console.log(item, index));//o ideal é sempre colocar entre parenteses no começo, para que possa passar mais argumentos

li.forEach(function(i){//mesma coisa da arrow function, porem usando function
  i.classList.add('ativa')
});


//[].map()
//é uma boa forma de modificar a array original
//funciona do mesmo jeito que o forEach, porem ao inves de retornar undefined, retorna uma nova array com valores atualizados
//de acordo com o returno de cada iteração
const carros2 = ['Ford', 'Fiat', 'Honda'];

const novosCarros = carros2.map((item)=>{//o map sempre vai me retornar uma array
  return 'Carro ' + item.toUpperCase();//o valor de retorno será de acordo com o return que eu colocar

  //return item;//eu sempre retorno o que eu fiz com o item(argumento) e não somente ele sem nada
});

console.log(novosCarros);

const numeros = [10, 60, 2, 17, 9];
/*const numerosX2 = numeros.map((item)=>{
  return item * 2;
});*///posso escrever dessa forma

const numerosX2 = numeros.map(n => n * 2);//esse tipo de código vai ser bem comum e é bem utilizado

console.log(numerosX2);


//Diferença entre map e forEach
//sempre que voce precisar de uma nova array voce vai usar o map
//se voce nao precisa de uma nova array e somente quer fazer algo, usa o forEach


//[].map() com Objetos
//usando um exemplo real
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);

const nomeAulas = aula => aula.nome;//esse código de callback é muito comum
const arrayNomeAulas = aulas.map(nomeAulas);

console.log(tempoAulas);
console.log(nomeAulas);


//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
//é uma outra forma de iterar
//recebe um novo valor, chamado 'acumulador', que é simplesmente o retorno da iteração anterior
const aulas2 = [10, 25, 30];

const reduceAulas2 = aulas2.reduce((acumulador, item, index, array)=>{
  console.log(acumulador, item, index, array);
  return item;//sempre que usar reduce, precisa ter um return retornando alguma coisa
}, 0);//quantida de iteração que ele faz

//exemplo mais claro de visualizar
const reduceAulas3 = aulas2.reduce((acumulador, item)=>{
  console.log(acumulador, item);
  return acumulador + item;//sempre que usar reduce, precisa ter um return retornando alguma coisa
}, 3);

console.log(reduceAulas3);

//o reduce pode ser usado para outras coisas e não somente para somar
const idades = [18, 26, 23, 22, 36];

const reduceIdades = idades.reduce((anterior, atual)=>{//qual o maior valor em uma cadeia de valores
  return anterior < atual ? atual : anterior;//if ternario
}, 0);

console.log(reduceIdades);

//podemos retornar outros valores com reduce tambem
const aulas3 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas3 = aulas3.reduce((acumulador, atual, index)=>{
  acumulador[index] = atual.nome;
  return acumulador;
}, {});

console.log(listaAulas3);


//[].reduceRight()
//ele itera da direita para esquerda, enquanto o reduce itera da esquerda para a direita
const frutas = ['Manga', 'Maça', 'Laranja'];

const frutasRight = frutas.reduceRight((item, frutas) => item + ' ' + frutas);//passo o nome do item anterior e o atual
console.log(frutasRight);


//[].some()
//se um item da iteração for verdadeiro, ele retorna true
const frutas2 = ['Banana', 'Perâ', 'Uva'];
const temUva = frutas2.some((fruta)=>{
  return fruta === 'Uva';
});

console.log(temUva);

const numeros1 = [10, 60, 2, 17, 9];
function maiorQue100(numero){
  return numero > 100;
}
console.log(maiorQue100())

//[].every()
//verifica se todas as iterações vão retornar verdadeiras, se um retornar falso, ele já me retorna false
//se um dos valores do array for undefined, null ou '', vai me retornar falso
const frutas3 = ['Banana', '', 'Perâ', 'Uva'];

const everyFrutas = frutas3.every((item)=>{
  return item;
});

console.log(everyFrutas);

const numeros2 = [10, 60, 2, 17, 9];

const maiorque3 = numeros2.every(n => n > 3);

console.log(maiorque3);


//[].find() e [].findIndex()
//procura o primeiro valor verdadeiro que encontrar e retorna
//quando ele achar o verdadeiro, vai retornar o index dele
const frutas4 = ['Banana', 'Laranja', 'Perâ', 'Uva'];

const indexFrutas = frutas4.findIndex((fruta)=>{
  return fruta === 'Uva'
});
console.log(indexFrutas);


const numeros3 = [10, 60, 2, 17, 9];
const numerosMaior45 = frutas4.find((item)=>{
  return item > 45;
});
console.log(numerosMaior45);

//[].filter()
//sempre retorna uma array apenas com os valores verdadeiros
//legal para filtrar uma lista e pegar somente os verdadeiros que voce passar
const frutas5 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas5.filter((item)=>{
  return item;
});
console.log(arrayFrutas);

//exemplo real de filter em objeto
const aulas4 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaiores = aulas4.filter((aula) => { 
  console.log(aula.min, aula.nome);
  return aula.min >= 15;
});
console.log(aulasMaiores);

//EXERCICIOS
// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCurso = Array.from(cursos);

const mapCurso = arrayCurso.map((curso)=>{
  const titulo = curso.querySelector('h1').innerText;
  const paragrafo = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return{
    titulo,
    paragrafo,
    aulas,
    horas
  }
});

console.log(mapCurso);

/*curso.forEach((item)=>{
  item = item.children[0].innerHTML + item.children[1].innerHTML
  console.log(item)
})*/

// Retorne uma lista com os
// números maiores que 100
const numeros6 = [3, 44, 333, 23, 122, 322, 33];

const numeroMaior100 = numeros6.filter((n)=>{
  return n = n > 100
});

console.log(numeroMaior100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const someInstrumentos = instrumentos.some((item)=>{
  return item === 'Baixo';
});

console.log(someInstrumentos);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]


const valorTotal = compras.reduce((acumulador, item)=>{
  const precoLimpo = +item.preco.replace('R$', '').replace(',', '.')
  return acumulador + precoLimpo;
}, 0)

console.log(valorTotal)