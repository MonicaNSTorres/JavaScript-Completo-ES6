//atribuição e ternario

//tem como o if e else ser um operador ternario
var idade = 18;
var condicao = (idade >= 18) ? 'maior de idade' : 'menor de idade';
console.log(condicao)

//EXERCICIOS
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;

//se eu quiser que saia string no resultado, posso responder assim
var darCredito = (possuiCarro && possuiCasa) ? 'Pode dar crédito' : 'Não pode dar crédito';
console.log(darCredito);

//se eu nao quiser que saia string no resultado, posso responder assim
darCredito = (possuiCarro && possuiCasa);
console.log(darCredito);