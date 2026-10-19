//eventos

//addEventListener
const imgs = document.querySelector('img');

imgs.addEventListener('click', function(){
  console.log('clicou')
});

//callBack
function callBack(){
  console.log('clicou')
};

imgs.addEventListener('click', callBack);

//event
const animais = document.querySelector('#animais');

function evento(event){
  console.log(event)
};

animais.addEventListener('click', evento);

//propriedades do event
//o event tem suas proprias propriedades sob um objeto
const animaisLista = document.querySelector('.animais-lista');

function executarCallBack(event){
  const currentTarget = event.currentTarget;
  const type = event.type;
  console.log(currentTarget, type)
};

animaisLista.addEventListener('click', executarCallBack);

//keyboard
//adicionar atalhos para facilitar a navegacao atraves de eventos
function handleKeyBoard(event){
  if(event.key === 'a'){
    document.body.classList.toggle('azul');
  }else if(event.key === 'v'){
    document.body.classList.toggle('verde');
  }
}

window.addEventListener('keydown', handleKeyBoard);

//EXERCICIOS
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('[href^="#"]');


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleT(event){
  if(event.key === 't'){
    document.body.classList.toggle('aumentado')
  }
}

window.addEventListener('keypress', handleT);