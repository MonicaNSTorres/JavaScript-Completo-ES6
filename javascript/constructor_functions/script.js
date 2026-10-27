//Objeto
//criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor 
//com chaves {}
const carro = {
    modelo: "modelo",
    preco: 0
};

const honda = carro;
honda.modelo = 'HRV';
honda.preco = 118.000

console.log(honda);

/*const pessoa = {
    nome: "nome",
    idade: 0,
    profissao: "profissao"
};

const monica = pessoa;
monica.idade = 26;
monica.nome = 'Mônica';
monica.profissao = 'programadora';*/

//Constructor Functions - começa sempre com letra maiuscula
function Moto(){
    this.modelo = "modelo";
    this.preco = 3000;
}

const yamaha = new Moto;
yamaha.modelo = 'cg';
yamaha.preco= 25000;

console.log(yamaha);

//Constructor Functions com parametros e argumentos
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
};

const monica = new Pessoa('Monica', 26);

console.log(`Meu nome é ${monica.nome} e tenho ${monica.idade} anos`);

//o this faz referencia ao proprio objeto construido com a constructor function
function Carro2(marca, precoInicial){
    this.taxa = 1.2;
    const precoFinal = precoInicial * this.taxa;

    this.marca = marca;
    this.preco = precoFinal;
};

const mazda = new Carro2('mazda', 1000);
console.log(mazda);

//exemplo real
//objeto real é o que faz voce manipular o dom no dia a dia

//esse é o tipo de objeto que eu consigo reaproveitar no dia a dia passando outros seletors
const Dom = {
    seletor: 'li',
    elemento(){//isso é uma função
        return document.querySelector(this.seletor);
    },
    ativar(){//isso é uma função
        const elementoSelectionado = this.elemento();
        elementoSelectionado.classList.add('ativar')
    }
}

Dom.ativar();
Dom.seletor = 'ul';
Dom.ativar();

//para não mudar o tempo todo, posso transformar em uma constructor function
function Dom2(seletor){
    this.element = function(){
        return document.querySelector(seletor);
    }
    
    this.ativar = function(classe){
        const element = this.element();

        if(element){
            element.classList.toggle(classe);
        }else{
            console.log(`Elemento não foi encontrado no dom: ${seletor}`);
        }
    }

    this.clique = function(element){
        this.element().addEventListener('click',()=>{
            if(element){
                this.ativar(element);
                console.log('Clicado');
            }else{
                console.log(`Elemento não foi encontrado: ${seletor}`)
            }
        })
    }
};

const li2 = new Dom2('li');//cosigo chamar a função dessa forma
li2.ativar('ativou-li');
li2.clique('ativado-li');

const LastChildLi = new Dom2('li:last-child');//consigo chamar dessa forma
LastChildLi.ativar('ativou-last');


//EXERCICIOS
// Transforme o objeto abaixo em uma Constructor Function

/*const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}*/

function Pessoa3(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function(){
        console.log(`Andou: ${nome}`);
    }
}

const jose = new Pessoa3('José Matheus', 6);
console.log(jose);


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa3('João', 20);
const maria = new Pessoa3('Maria', 25);
const bruno = new Pessoa3('Bruno', 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom3(seletor){
    this.element = function(){
        return document.querySelectorAll(seletor)
    }
    
    this.addClass = function(classe){
        const element = this.element();
        element.forEach((element)=>{
            element.classList.add(classe)
        })
    }

    this.removeClass = function(classe){
        const element = this.element();
        element.forEach((element)=>{
            element.classList.remove(classe)
        })
    }
}

const li3 = new Dom3('li');//seleciono o elemento
li3.addClass('ativo');//se eu chamar o addClass vou adicionar
li3.removeClass('ativo');//se eu chamar o removeClass vou remover
console.log(li3.element())//retorna minha nodeList