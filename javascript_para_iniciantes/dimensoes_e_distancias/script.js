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


//EXERCICIOS
// Verifique a distância da primeira imagem
// em relação ao topo da página

// Retorne a soma da largura de todas as imagens

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
