//Factory Function
//são funções que retornam um objeto sem a necessidade de utilizamos a palavra chave new
//a vantagem é não utilizar a palavra new
function createButton(text){
    function element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }

    return{//se a chave for o mesmo valor da variavel, eu posso passar direto
        text,
        element
    }
};

const btnSearch = createButton('Pesquisar');
console.log(btnSearch.element());


//Metodos / Variaveis privadas
//podemos ter metodos e variaveis privadas
function criarPessoa(nome, sobrenome){
    const nomeCompleto = `${nome} ${sobrenome}`;

    function andar(){
        return `${nomeCompleto} andou`;
    }

    function nadar(){
        return `${nomeCompleto} nadou`;
    }

    return{
        nome,
        sobrenome,
        andar,
        nadar
    }
};

const programadora = criarPessoa('Mônica', 'Torres');
console.log(programadora.andar());


//Ice Factory -> Fábrica de Gelo
//por que no retorno do objeto usamos Object.freeze() para congelar todos os objetos
//e impedir que o usuario escreva por cima
function createDiv(text, color){
    function element(){
        const divElement = document.createElement('div');
        divElement.innerText = text;
        divElement.style.backgroundColor = color;
        return divElement;
    }

    return Object.freeze({
        text,
        color,
        element
    });
};

const card = createDiv('Compras', 'red');
console.log(card.element());


//Constructor Function / Factory Function
function Pessoa(nome){
    if(!(this instanceof Pessoa))//ou posso usar (!new.target)
    return new Pessoa(nome);
    this.nome = nome;
};

Pessoa.prototype.andar = function(){
    return `${this.nome} andou`;
};

const medico = Pessoa('Tauana');//com e sem o 'new' na frente, ele funciona
console.log(medico.andar());


//EXERCICIO
function $$(selectedElements){
    const elements = document.querySelectorAll(selectedElements);

    function hide(){
        elements.forEach(element =>{
            element.style.display = 'none';
        });
        return this;
    }

    function show(){
        elements.forEach(element =>{
            element.style.display = 'block';
        });
        return this;
    }

    function on(onEvent, callback){
        elements.forEach(element =>{
            element.addEventListener(onEvent, callback);
        });
        return this;
    }

    function addClass(className){
        elements.forEach(element =>{
            element.classList.add(className);
        });
        return this;
    }

    function removeClass(className){
        elements.forEach(element =>{
            element.classList.remove(className);
        });
        return this;
    }

    return{
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass
    }
};

const btns = $$('button');
console.log(btns.addClass('ativa'));