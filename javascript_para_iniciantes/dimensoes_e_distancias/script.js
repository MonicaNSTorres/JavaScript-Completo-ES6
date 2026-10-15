//hight e width
//Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
const animais = document.querySelector(".animais");

animais.clientHeight; //hight + padding
animais.scrollHeight; //hight + padding + border
animais.offsetHeight; //height total mesmo dentro do scroll

//mesma coisa para width
animais.clientWidth;
animais.scrollWidth;
animais.offsetWidth;

//offsetTop e offsetLeft
//distancia entre o topo do elemento e o topo da pagina
console.log(animais.offsetTop);

//distancia entre o canto esquerdo do elemento e o canto esquerdo da pagina
console.log(animais.offsetLeft);

const primeiroH2 = document.querySelector("h2");

const h2left = primeiroH2.offsetLeft;

//getBoundingClientReact()
//um objeto que retorna varios valores dele mesmo, como width e height
const rect = primeiroH2.getBoundingClientRect();

console.log(rect.top);

//window
//o tamanho da tela do usuario, diferentes dimensoes eu consigo ver
console.log(window.innerWidth);

console.log(`distancia que a window ja deu de scroll: ${window.pageYOffset}`);

if (rect.top < 0) {
  console.log("passou do elemento");
}

//matchMedia()
//é a forma correta de usar media-queri no javascript
//utiliza um media-querie como no CSS para verificar a largura do browser
const telaMobile = window.matchMedia("(max-width: 600px)");

if (telaMobile.matches) {
  console.log("usuário mobile");
} else {
  console.log("usuário desktop");
}

//EXERCICIOS
// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector("img");
console.log(`Distancia em relação ao topo da pagina: ${primeiraImg.offsetTop}`);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const todasImgs = document.querySelectorAll("img");
  let soma = 0;

  todasImgs.forEach(function (item) {
    //console.log(item.getBoundingClientRect().width)
    soma = soma + item.offsetWidth;
  });
  console.log(`Soma da largura: ${soma}`);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const todosLinks = document.querySelectorAll("a");

todosLinks.forEach(function (item) {
  const linkWidht = item.offsetWidth;
  const linkHeight = item.offsetHeight;

  if (linkWidht >= 48 && linkHeight >= 48) {
    console.log(item, "tem o minimo recomendado");
  } else {
    console.log(item, "não tem o minimo recomendado");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browser = window.matchMedia("(max-width: 720px)");

const menu = document.querySelector(".menu");

if (browser.matches) {
  menu.classList.add("menu-mobile");
} else {
  console.log("classe não adicionada");
}

//MAIS EXERCICIOS
//Descobrindo o maior elemento
//Selecione todos os elementos section e descubra qual deles possui a maior largura.
//Exiba essa largura no console.
const maiorElemento = document.querySelectorAll("section");

maiorElemento.forEach(function (item) {
  console.log(item, `Qual possui a maior largura: ${item.offsetWidth}`);
});

//Elemento mais próximo do topo
//Selecione todas as imagens da página e descubra qual está mais próxima do topo do documento.
//Exiba sua distância no console.
const allImages = document.querySelectorAll("img");

allImages.forEach(function (item) {
  console.log(item.offsetTop);
});

//Somando alturas
//Selecione todos os elementos com a tag dd, some suas alturas e exiba o resultado.
//Depois, conte quantos possuem altura superior a 200px.

function somaAlturas() {
  const gridSection = document.querySelectorAll("dd");
  let somaAltura = 0;

  gridSection.forEach(function (item) {
    somaAltura += item.offsetHeight;

    if (somaAltura >= 200) {
      console.log("altura superior a 200px");
    } else {
      console.log("altura inferior a 200px");
    }
  });
  console.log(`Soma das alturas: ${somaAltura}`);
}

window.onload = function () {
  somaAlturas();
};

//Verificando o tamanho da tela
//Crie uma condição que mostre 'Mobile' quando a largura da janela for menor que 600px, 'Tablet' entre 600px e 1023px
//e 'Desktop' a partir de 1024px.
const tamanhoMobile = window.matchMedia("(max-width: 600px)");
const tamanhoTablet = window.matchMedia(
  "(min-width: 601px) and (max-width: 1023px)",
);
const tamanhoDesktop = window.matchMedia("(max-width: 1024px)");

if (tamanhoMobile.matches) {
  console.log("Mobile");
} else if (tamanhoTablet.matches) {
  console.log("Tablet");
} else if (tamanhoDesktop.matches) {
  console.log("Desktop");
} else {
  console.log("Não se enquadra");
}

//Identificando elementos fora da tela
//Percorra todas as imagens e identifique quais estão completamente fora da área visível do navegador.
//Exiba essas imagens no console.

//Menu responsivo automático
//Adicione .menu-mobile ao menu quando a tela tiver até 720px e remova quando ultrapassar esse valor.
//O código também deve funcionar quando o usuário redimensionar a janela, sem recarregar a página.
const menuMobile = window.matchMedia("(max-width: 720px)");
const menu2 = document.querySelector(".menu");

if (menuMobile.matches) {
  menu2.classList.add("menu-mobile");
} else {
  menu2.classList.remove("menu-mobile");
}

//Elemento visível na rolagem
//Selecione um elemento, destaque e verifique se alguma parte dele está visível na janela.
//Mostre true ou false no console.
const titulo = document.querySelector('.titulo');

const visivel = titulo.getBoundingClientRect();

if(visivel.height > 0 && visivel.width > 0 && visivel.left > 0 && visivel.right > 0){
    console.log(true)
}else{
    console.log(false)
}

//Botão com tamanho acessível
//Selecione todas as imagens, se alguma tiver largura ou altura inferior a 48px, adicione a classe
//.img-pequena. Remova essa classe dos que já atendem ao tamanho.
const todasAsImagens = document.querySelectorAll("img");

todasAsImagens.forEach(function (item) {
  if (item.width < 48) {
    item.classList.add("img-pequena");
  } else if (item.width === 48) {
    item.classList.remove("img-pequena");
  }
});

//Descobrindo a posição do rodapé
//Descubra a distância entre o topo do documento e o início do rodapé, mesmo depois de rolar a página.
//Exiba o valor no console.
const rodape = document.querySelector("footer");

console.log(`Distancia entre o topo ao inicio do rodapé: ${rodape.offsetTop}`);

//Criando um detector de seção ativa
//Selecione todas as seções da página. Durante a rolagem, descubra qual seção ocupa a linha situada a 100px do
//topo da janela. Adicione .ativa a ela e remova das demais.
const todasAsSecoes = document.querySelectorAll("section");
//const distancia = todasAsSecoes.getBoundingClientRect();

todasAsSecoes.forEach(function(item) {
  if (item.scrollTop === 100) {
    item.classList.add("ativa");
  } else {
    item.classList.remove("ativa");
  }
});
