//innerText, outerText e innerHtml
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
const menu = document.querySelector('.manu');
const contato = document.querySelector('.contato');
const faq = document.querySelector('.faq');

contato.appendChild(titulo);//move titulo para final de contato
//contato.insertBefore(menu, faq);//o primeiro elemento é quem eu quero mover e o ultimo é o elemento que eu quero que coloque antes
contato.removeChild(titulo);//remove titulo de contato
contato.replaceChild(lista, titulo);//substitui titulo por lista

//clonar
const cloneFaq = faq.cloneNode(true);

contato.appendChild(cloneFaq);

// Duplique o menu e adicione ele em copy
const menu2 = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const duplicarMenu = menu2.cloneNode(true);
copy.appendChild(duplicarMenu);

// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('.faq-lista');

console.log(primeiroDt.parentElement);

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais
