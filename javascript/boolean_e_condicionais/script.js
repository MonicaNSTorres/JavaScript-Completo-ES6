var possuiGraduacao = true;
var possuiPosGraduacao = false;

if (possuiGraduacao && possuiPosGraduacao) {
    console.log("Possui graduação e pós graduação");
} else if (possuiGraduacao) {
    console.log("Possui graduação");
} else if (possuiPosGraduacao) {
    console.log("Possui pós graduação");
} else {
    console.log("Não possui nada");
}

//truthy ou falsy dão em algumas situações, como essa por exemplo:
var falso = 0;
var verdadeiro = 1;

if (falso === 0) {
    console.log(`é falso ${falso}`)
} else if (verdadeiro === 1) {
    console.log(`é verdadeiro ${verdadeiro}`)
} else {
    console.log("Não é nenhum dos dois")
}

//se eu colocar exclamação ! na frente uma vez, ele converte
//se eu colocar exclamação !! na frente duas vezes, ele verifica
console.log(!!possuiPosGraduacao);
console.log(!possuiPosGraduacao);

//com case eu posso verificar se uma variavel é igual a diferentes valores
//caso seja igual, posso fazer algo e utilizar a palavra break
var corFavorita = "Verde";

switch (corFavorita) {
    case "Azul":
        console.log("olhe para o céu")
        break;
    case "Vermelho":
        console.log("olhe para a lua")
        break;
    case "Verde":
        console.log("olhe para o campo")
        break;
    default:
        break;
}

//EXERCICIOS
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 26;
var idadeParente = 30;

if (minhaIdade > idadeParente) {
    console.log("é maior");
} else if (minhaIdade === idadeParente) {
    console.log("é igual");
} else {
    console.log("é menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome);
console.log(!!idade);
console.log(!!possuiDoutorado);
console.log(!!empregoFuturo);
console.log(!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207e5;
var china = 1340e6;

console.log(brasil, china);

if (brasil > china) {
    console.log("Brasil tem mais habitantes");
} else if (brasil === china) {
    console.log("A quantidade de habitantes é igual")
} else {
    console.log("China tem mais habitantes");
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso'); //vai aparecer falso
}

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão'); //vai aparecer essa opção
} else {
    console.log('Falso');
}

//testando consumo de api
fetch('https://api.kanye.rest/')
    .then(r => r.json())
    .then(quote => {
        console.log(`Retornando somente a frase: ${quote.quote}`)
    })