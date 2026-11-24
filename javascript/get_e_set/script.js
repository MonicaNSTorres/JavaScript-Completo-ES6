//Get e Set
//podemos definir comportamentos diferentes de get e set para um metodo
const button = {
    get tamanho(){
         return this._numero || 100;
    },
    set tamanho(numero){
        this._numero = numero * 200;
    }
}

button.tamanho = 200;

console.log(button.tamanho);


//Set
//uso direto para influenciar no meu get ou em outras propriedades
const frutas = {
    lista: [],
    set nova(fruta){
        this.lista.push(fruta);
    }
};

frutas.nova = 'Banana';
frutas.nova = 'Manga';
frutas.nova = 'Laranja';

console.log(frutas.lista);


//Class
//assim como em objetos, as classes podem ter metodos de get e set tambem
class Button{
    constructor(text, color){
        this.text = text;
        this.color = color;
    }
    get element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
}

const blueButton = new Button('Clique', 'red');
console.log(blueButton.element);