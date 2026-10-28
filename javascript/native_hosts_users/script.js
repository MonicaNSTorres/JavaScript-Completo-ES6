//Verificar se existe
//como o typeof retorna o tipo de dado, caso ele nao exista ou não tenha sido definido, retornará
//undefined. Quando não for undefined, quer dizer que existe.
const lista = document.querySelectorAll('li');

if(typeof lista === undefined){
    console.log('lista não existe');
}else{
    console.log('lista existe');
};

if(typeof Array.from !== "undefined"){
    console.log('existe');
}else{
    console.log('não existe');
};

if(typeof NodeList !== "undefined"){
    console.log('existe');
}else{
    console.log('não existe');
};

//EXERCICIOS
// Liste 5 objetos nativos
Object
String
Array
Function
Number

// Liste 5 objetos do browser
window
history
document
NodeList
HTMLCollection

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if(typeof document.webkitVisibilityState !== 'undefined'){
    console.log('existe');
}else{
    console.log('não existe');
};