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
  const currentTarget = event.currentTarget;//this
  const type = event.type;//tipo de evento
  const target = event.target;//onde o clique ocorreu
  console.log(currentTarget, type, target)
};

animaisLista.addEventListener('click', executarCallBack);

//event.preventDefault()
//previne o comportamento padrão do evento no browser
const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event){
  event.preventDefault();
  console.log(event.currentTarget.href);
};

linkExterno.addEventListener('click', clickNoLink);

//diferentes eventos
const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);//alguns eu adiciono ao window
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);


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

function handleLink(event){
  event.preventDefault();
  linksInternos.forEach((link)=>{
    link.classList.remove()
  })
  event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((item)=>{
  item.addEventListener('click', handleLink)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosOsElementos = document.querySelectorAll('body *');

/*function handleElemento(event){
  console.log(event.currentTarget)
}

todosOsElementos.forEach((item)=>{
  item.addEventListener('click', handleElemento);
})*/

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleRemoveElemento(event){
  console.log(event.currentTarget.remove())
}

todosOsElementos.forEach((item)=>{
  item.addEventListener('click', handleRemoveElemento);
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleT(event){
  if(event.key === 't'){
    document.body.classList.toggle('aumentado')
  }
}

window.addEventListener('keypress', handleT);


//MAIS EXERCICIOS
// Ao clicar em uma pergunta da FAQ, mostre ou esconda a resposta
// correspondente. Ao clicar novamente na pergunta, alterne o estado.

// Ao clicar em uma imagem da lista de animais, adicione a classe
// ativo à imagem clicada e remova essa classe das outras imagens.

// Ao clicar em uma imagem, mostre no console o nome do animal
// correspondente.

// Adicione um único evento de clique à lista de animais.
// Ao clicar em uma imagem, identifique qual elemento recebeu o clique
// usando event.target e event.currentTarget.

// Ao clicar no link "Dark Mode", previna o comportamento padrão
// e alterne uma classe no body para ativar ou desativar o modo escuro.

// Quando o usuário pressionar a tecla "1", role a página até a seção
// Animais. Com a tecla "2", role até a FAQ. Com a tecla "3", role até Contato.

// Quando o usuário pressionar a tecla "t", alterne uma classe que
// transforme o texto do site em letras maiúsculas.

// Quando o usuário passar o mouse sobre uma pergunta da FAQ,
// adicione uma classe a ela. Quando o mouse sair, remova essa classe.

// Ao clicar em uma imagem da lista, remova somente o item clicado.
// Evite que o clique remova também os elementos pais.

// Quando a página for rolada, mostre no console a posição atual
// do scroll vertical.

// Quando o tamanho da janela mudar, mostre no console a largura
// atual da janela.

// Quando o usuário clicar em um link interno do menu, adicione
// a classe ativo ao link clicado e remova dos demais. Previna o
// comportamento padrão dos links.

// Ao clicar em uma imagem, mostre no console o tipo do evento,
// o elemento clicado e o elemento que recebeu o listener.

// Ao clicar no botão direito do mouse sobre uma imagem, previna
// o menu padrão do navegador e mostre uma mensagem no console.