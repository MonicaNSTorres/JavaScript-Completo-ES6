//diferenca entre HTMLCollection e NodeList

//array-like só existe no NodeList
const gridSectionNode = document.querySelectorAll('.grid-section');

gridSectionNode.forEach(function(item, index){
    console.log(item.id, index);
})

//EXERCICIOS
// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const palavraImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(palavraImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2:first-child').innerHTML;
console.log(primeiroH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
const ultimoP = (--paragrafos.length);

console.log(ultimoP);
