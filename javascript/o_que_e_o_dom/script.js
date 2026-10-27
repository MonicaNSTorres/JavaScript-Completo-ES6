//eu consigo interagir com o meu dom, atraves do window
const link = window.location.href;
console.log(link)

if (link === 'http://127.0.0.1:3030/javascript_para_iniciantes/o_que_e_o_dom/') {
    console.log('link certo')
} else {
    console.log('link errado')
};

//Node
//toda ta html é representada pelo objeto element e por isso herda
//os seus metodos e propriedades. Element é um tipo de objeto node
const titulo = document.querySelector('h1');

const tituloSelecionado = titulo.hasAttribute;
console.log(tituloSelecionado);

const botao = document.querySelector('button');

botao.addEventListener('click', function () {
    document.body.innerText = 'Você é foda!';
});

//EXERCICIOS
// Retorne o url da página atual utilizando o objeto window
const urlAtual = window.location.href;
console.log(urlAtual);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiroElementoAtivo = document.querySelector('.corpo');
console.log(primeiroElementoAtivo);

// Retorne a linguagem do navegador
const linguagemNav = window.navigator.language;
console.log(`A linguagem usada no navegador é: ${linguagemNav}`);

// Retorne a largura da janela 
const larguraJanela = window.innerWidth;
console.log(larguraJanela);

//Exercicios extras
//verificar a linguagem do navegador e caso clique em 'translate'
//mudar a linguagem para ingles
const translate = document.querySelector('.translate');

const idioma = window.navigator.language;

translate.addEventListener('click', function() {
    const h2 = document.createElement('h2');

    if (idioma === 'pt-BR') {
        h2.innerText = 'Bem vindo'

    } else if (idioma === 'en-US') {
        h2.innerText = 'Welcome'

    } else {
        h2.innerText = 'Não achei'
    }
    document.body.appendChild(h2)
});

//aplicar contador por lista
const lista = document.querySelector('li');

const items = ['Carro', 'Bola', 'Jogo', 'Bike', 'AirCraft'];

items.forEach(function (item) {
    const li = document.createElement('li');

    li.innerText = item;

    lista.appendChild(li);
})