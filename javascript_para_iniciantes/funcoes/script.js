function quadrado(lado){
    return lado * lado;
}

console.log(quadrado(4));

const idade = window.prompt("Qual a sua idade?");

function verificarIdade(idade){
    if(idade >= 18){
        console.log('Acesso liberado.')
    }else{
        console.log('Acesso negado.')
    }
}

console.log(verificarIdade(idade))