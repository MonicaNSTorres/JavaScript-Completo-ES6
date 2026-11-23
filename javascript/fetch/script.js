//Fetch
//forma de interagir com uma API
//permite fazermos requisições HTTP através do método fetch()
//este método retorna a resolução de uma Promise. Podemos então utilizar o then 
//para interagirmos com a resposta, que é um objeto do tipo Response.
const doc = fetch('./doc.txt');

doc.then(resolucao => {
    return resolucao.text();
}).then((body)=>{
    const conteudo = document.createElement('div');
    document.body.appendChild(conteudo);
    conteudo.innerText = body;

    console.log(body);
});


//Json
const viaCep = fetch('https://viacep.com.br/ws/01001000/json/');

viaCep.then(resolucao => {
    return resolucao.json();
}).then((body)=>{
    const conteudoCep = document.createElement('div');
    document.body.appendChild(conteudoCep);
    conteudoCep.innerText = body.logradouro;

    console.log(body);
})


//Text
//Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.
const css = fetch('./style.css');

css.then((resolucao)=>{
    return resolucao.text();
}).then((body)=>{
    const conteudoCss = document.querySelector('.conteudoCss');
    const style = document.createElement('style');

    style.innerHTML = body;
    console.log(style);
    conteudoCss.appendChild(style);
});


//HTML e text()
//vai ser comum puxar um html e transformar essa pagina em texto
//posso injetar em uma div e trabalhar normal com o dom
const sobre = fetch('./sobre.html');

const div = document.createElement('div');

sobre.then((resolucao)=>{
    return resolucao.text();
}).then((body)=>{
    div.innerHTML = body;
    const titulo = div.querySelector('h1');

    document.querySelector('h1').innerText = titulo.innerText;
});


//Blob
//o blob pode ser utilizado para transformarmos requisições de imagens por exemplo
//o blob gera um URL único
const img = fetch('./imagem.png');

img.then((resolucao)=>{
    return resolucao.blob();
}).then((body)=>{
    const blobUrl = URL.createObjectURL(body);//crio um link da img
    const imagemDom = document.querySelector('img');//seleciono a tag do meu index
    imagemDom.src = blobUrl;//injeto nessa tag, no src dela, o link que criei da img

    console.log(body);
});


//Clone
//ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada 
//por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores
const imagem = fetch('https://viacep.com.br/ws/01001000/json/');

imagem.then(r =>{
    const r2 = r.clone();
    r.text().then((text)=>{
        console.log(text);
    })

    r2.json().then((json)=>{
        console.log(json)
    })
}).then(body=>{
    console.log(body)
})


//Hearders
//é uma propriedade que possui os cabeçalhos da requisição
//é um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles
const url = fetch('https://viacep.com.br/ws/01001000/json/');

url.then((resolucao)=>{
    return resolucao.headers.forEach(console.log);
});


//Status e ok
const docs = fetch('./docs.txt');

docs.then((resolucao)=>{
    console.log(resolucao.url);//posso passar url, status, type
    if(resolucao.status === 404){
        console.log('Pagina com erro');
    };
});