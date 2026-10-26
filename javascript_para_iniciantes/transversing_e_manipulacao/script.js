//innerText, outerText e innerHtml
const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

const titulo = document.querySelector('.titulo');

titulo.innerHTML = '<h1>Teste Novo</h1>'
console.log(titulo.outerHTML);

//transversing
//navega por dentro do dom
const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement);//pai
console.log(lista.parentElement.parentElement);//pai do pai
console.log(lista.previousElementSibling);//elemento acima
console.log(lista.nextElementSibling);//elemento abaixo

console.log(lista.children);//HtmlCollection com os filhos
console.log(lista.children[0]);//primeiro filho
console.log(--lista.children.length);//ultimo filho

//manipulando elementos
//tem como mover, duplicar e etc
//const menu = document.querySelector('.menu');
const contato = document.querySelector('.contato');
const faq = document.querySelector('.faq');

//contato.appendChild(titulo);//move titulo para final de contato
//contato.insertBefore(menu, faq);//o primeiro elemento é quem eu quero mover e o ultimo é o elemento que eu quero que coloque antes
//contato.removeChild(titulo);//remove titulo de contato
//contato.replaceChild(lista, titulo);//substitui titulo por lista

//criar um novo elemento
const novoH1 = document.createElement('h1');
novoH1.innerText = 'oi';
novoH1.classList.add('novo-titulo');

titulo.appendChild(novoH1);

//clonar
const cloneFaq = faq.cloneNode(true);

contato.appendChild(cloneFaq);

//EXERCICIOS
// Duplique o menu e adicione ele em copy
const menu2 = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const duplicarMenu = menu2.cloneNode(true);
copy.appendChild(duplicarMenu);

// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('dl');

console.log(primeiroDt.children[0]);

// Selecione o DD referente ao primeiro DT
console.log(primeiroDt.children[1])

// Substitua o conteúdo html de .faq pelo de .animais
const sectionFaq = document.querySelector('.faq');
const sectionAnimais = document.querySelector('.animais');

sectionFaq.innerHTML = sectionAnimais.innerHTML;