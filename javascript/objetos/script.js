//metodo é uma propriedade que possui uma função no seu valor
var perfil = {
    nome: "Mônica",
    sobrenome: "Torres",
    imc: function(peso, altura){
        return peso * altura;
    },
    possuiGraduacao: true,
};

console.log(perfil.imc(75, 170));

console.log(perfil.possuiGraduacao);

//acesse propriedades de um objeto utilizando ponto
var estilizacao = {
    width: 800,
    color: "red",
    backgroundColor: "blue",
};

//consigo setar um valor e adicionar um novo
estilizacao.color = "black";
console.log(estilizacao.color);

//adicionar
estilizacao.height = 200;
console.log(estilizacao.height);

//EXERCICIOS
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
    nome: "Mônica",
    sobreNome: "Torres",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = (`Nome completo: ${dadosPessoais.nome} ${dadosPessoais.sobreNome}`);
console.log(dadosPessoais.nomeCompleto);

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: "labrador",
    cor: "preto",
    idade: 10,
    latido: function(pessoa){
        if(pessoa === "homem"){
            console.log('late!!!!');
        }else{
            console.log('não late.');
        }
    }
}

console.log(cachorro.latido("homem"))