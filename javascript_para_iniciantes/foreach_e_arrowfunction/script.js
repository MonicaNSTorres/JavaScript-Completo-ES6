

//forEach utilizamos para percorrer item por item
const lista = document.querySelectorAll('li img')

lista.forEach(function(item, index){
    console.log(item, index);
})

//array like é um metodo de nodeList que consigo transformar algo em array
const titulos = document.getElementsByTagName('h2');
const titulosArray = Array.from(titulos);

console.log(titulosArray);

//arrow function é a sintaxe curta, remove a palavra function
titulosArray.forEach((item)=>{
    console.log(item.innerText)
})

//EXERCICIOS
// Mostre no console cada parágrado do site
const todosParagrafos = document.querySelectorAll('p');
todosParagrafos.forEach((item)=>{
    console.log(item);
});

// Mostre o texto dos parágrafos no console
todosParagrafos.forEach((item)=>{
    console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++)
});

imgs.forEach(() => i++);

