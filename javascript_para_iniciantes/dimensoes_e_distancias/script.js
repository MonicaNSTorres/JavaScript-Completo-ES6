//hight e width
//Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
const animais = document.querySelector('.animais');

animais.clientHeight;//hight + padding
animais.scrollHeight;//hight + padding + border
animais.offsetHeight;//height total mesmo dentro do scroll

//mesma coisa para width
animais.clientWidth;
animais.scrollWidth;
animais.offsetWidth;


//offsetTop e offsetLeft
//distancia entre o topo do elemento e o topo da pagina
console.log(animais.offsetTop);

//distancia entre o canto esquerdo do elemento e o canto esquerdo da pagina
console.log(animais.offsetLeft);

const primeiroH2 = document.querySelector('h2');

const h2left = primeiroH2.offsetLeft;

//getBoundingClientReact()
//um objeto que retorna varios valores dele mesmo, como width e height
const rect = primeiroH2.getBoundingClientRect();

console.log(rect.top);

//window
//o tamanho da tela do usuario, diferentes dimensoes eu consigo ver
console.log(window.innerWidth);

console.log(`distancia que a window ja deu de scroll: ${window.pageYOffset}`);

if(rect.top < 0){
    console.log('passou do elemento')
}

//matchMedia()
//é a forma correta de usar media-queri no javascript
//utiliza um media-querie como no CSS para verificar a largura do browser
const telaMobile = window.matchMedia('(max-width: 600px)');

if(telaMobile.matches){
    console.log('usuário mobile')
}else{
    console.log('usuário desktop')
}

//EXERCICIOS
// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
console.log(`Distancia em relação ao topo da pagina: ${primeiraImg.offsetTop}`);

// Retorne a soma da largura de todas as imagens

function somaImagens(){
    const todasImgs = document.querySelectorAll('img');
    let soma = 0;

    todasImgs.forEach(function(item){
        //console.log(item.getBoundingClientRect().width)
        soma = soma + item.offsetWidth;
    })
    console.log(`Soma da largura: ${soma}`);
}

window.onload = function(){
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const todosLinks = document.querySelectorAll('a');

todosLinks.forEach(function(item){
    const linkWidht = item.offsetWidth;
    const linkHeight = item.offsetHeight;

    if(linkWidht >= 48 && linkHeight >= 48){
        console.log(item, 'tem o minimo recomendado')
    }else{
        console.log(item, 'não tem o minimo recomendado')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browser = window.matchMedia('(max-width: 720px)');

const menu = document.querySelector('.menu');

if(browser.matches){
    menu.classList.add('menu-mobile')
}else{
    console.log('classe não adicionada')
}