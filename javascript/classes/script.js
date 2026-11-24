//Class
//a classe veio para fazer a mesma função da função construtora
//só que agora com uma sintaxe especifica
class Button{
    constructor(text, background, color){
        this.text = text;
        this.background = background;
        this.color = color;
    }
    element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.backgroundColor = this.background;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    appendTo(target){//This -> faz referencia ao objeto que foi construido a partir do new
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
};

const blueButton = new Button('Comprar', 'blue', 'white');

console.log(blueButton);

console.log(blueButton.appendTo('body'));


//Propriedades
//podemos passar qualquer valor dentro de uma propriedade
class Button2{
    constructor(options){
        this.options = options;
    }
};

const redButton = new Button2({
    backgroundColor: 'red',
    text: 'Comprar',
    color: 'white',
});

console.log(redButton);


//Static
//voce pode utilizar um método static para retornar a própria classe com propriedades já pré definidas.
class Button3{
    constructor(text, background){
        this.text = text;
        this.background = background;
    }
    element(){
        const elementButton = document.createElement('button');
        elementButton.innerText = this.text;
        elementButton.style.backgroundColor = this.background;
        return elementButton;
    }
    static createBlue(text){
        return new Button3(text, 'blue');
    }
};


// EXERCICIOS
// 1 - Crie uma classe chamada ProductCard, responsável por
// criar cards de produtos e inseri-los no DOM.

// O constructor deve receber o nome do produto, preço,
// cor de fundo e cor do texto.

// Crie um método element() que crie uma div, exiba o nome
// e o preço do produto, aplique as cores recebidas
// e retorne o elemento criado.

// Crie um método appendTo(target) que receba um seletor
// e insira o card no elemento HTML correspondente.

// Crie três instâncias da classe utilizando new:
// Notebook, Celular e Monitor, com preços e cores diferentes.

// Insira os três cards no DOM.

class ProductCard{
    constructor(produto, preco, background, color){
        this.produto = produto;
        this.preco = preco;
        this.background = background;
        this.color = color;
    }
    element(){
        const div = document.createElement('div');
        div.innerText = this.produto;
        div.innerText = this.preco;
        div.style.backgroundColor = this.background;
        div.style.color = this.color;
        return div;
    }
    appendTo(target){
        const elementTarget = document.querySelector(target);
        elementTarget.appendChild(this.element());
    }
}

const notebook = new ProductCard('notebook', 2500, 'gray', 'white');
notebook.appendTo('body');

const celular = new ProductCard('celular', 3600, 'red', 'black');
celular.appendTo('body');

const monitor = new ProductCard('monitor', 800, 'black', 'white');
monitor.appendTo('body');

// 2 - Crie uma classe chamada Notification, responsável
// por criar notificações de um sistema.

// O constructor deve receber um objeto options contendo
// as propriedades text, background e color.

// Crie um método element() que crie uma div, adicione
// o texto, aplique as cores e retorne o elemento criado.

// Crie um método appendTo(target) que insira
// a notificação no DOM.

// Crie um método static createSuccess(text) que retorne
// uma nova instância da classe com fundo verde e texto branco.

// Crie um método static createError(text) que retorne
// uma nova instância da classe com fundo vermelho e texto branco.

// Crie um método static createWarning(text) que retorne
// uma nova instância da classe com fundo amarelo e texto preto.

// Crie uma notificação personalizada utilizando new,
// com fundo azul e texto branco.

// Insira as quatro notificações no DOM.

class Notification{
    constructor(options){
        this.options = options;
    }
    element(){
        const div = document.createElement('div');
        div.innerText = this.options.text;
        div.style.backgroundColor = this.options.background;
        div.style.color = this.options.color;
        return div;
    }
    appendTo(target){
        const selecao = document.querySelector(target);
        selecao.appendChild(this.element());
    }
    static createSuccess(text){
        return new Notification({text, background: 'green', color: 'white'})
    }
    static createError(text){
        return new Notification({text, background: 'red', color: 'white'})
    }
    static createWarning(text){
        return new Notification({text, background: 'yellow', color: 'black'})
    }
};

const optionsNotfication = new Notification({
    text: 'Compra aprovada',
    background: 'blue',
    color: 'white',
});

console.log(optionsNotfication.appendTo('body'));