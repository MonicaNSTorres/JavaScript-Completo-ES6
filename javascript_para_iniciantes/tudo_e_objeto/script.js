//interagimos com tudo atraves do dom com objeti

const botao = document.querySelector('.btn');

botao.addEventListener('click', function(){
    document.body.style.backgroundColor = "blue"
})

//EXERCICIOS
// nomeie 3 propriedades ou métodos de strings
var nome = 'monica';

nome.length;
nome.toLowerCase;
nome.slice;

// nomeie 5 propriedades ou métodos de elementos do DOM
botao.addEventListener;
botao.append;
botao.animate;
botao.after;
botao.contains;

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
var mensagem = document.querySelector('.msg');

mensagem.addEventListener('click', function(){
    navigator.clipboard.writeText('Você é foda')
})