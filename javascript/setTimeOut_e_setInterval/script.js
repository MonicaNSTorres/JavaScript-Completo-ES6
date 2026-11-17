//setTimeOut
//serve para definir um callback e passar um tempo pra ele, somente apos o callback, que sera acionado
function espera(texto){
  console.log(texto);
};

setTimeout(espera, 1000, 'passou 1s');

//é muito comum ver o codigo assim:
setTimeout(function(){
  //console.log('Mônica');
}, 1000);


//Loops e setTimeout
//um setTimeout não espera o outro ocorrer para contar o tempo
for(let i = 0; i < 20; i++){
  setTimeout(()=>{
    //console.log(i);
  }, 1000);
};

//se eu colocar multiplicado, ele vai colocar varios callbacks com tempo diferente
for(let i = 0; i < 15; i++){
  setTimeout(()=>{
    //console.log(i);
  }, 1000 * i);//ele vai contar certinho 1 segundo pra cada
};


//This e Window
//setTimeout é um método do objeto Window. O valor de this dentro do mesmo callback é uma referência 
//ao seu objeto no caso Window.
const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick(){
  setTimeout(()=>{//se eu passo a arrowFuntion ele usar o this do contexto pai e não do window
    console.log(this);//this é o botao
    this.classList.toggle('active');
  }, 1000);//se eu colocar o tempo, apos esse tempo, vai adicionar a classe
};


//setInterval
//ativa a função de callback a cada tempo, o setTimeout só passa uma vez
function loop(texto){
  //console.log(texto);
};

let i = 0;
setInterval(()=>{
  //console.log(i++);
}, 300);


//clearInterval
//podemos parar um intervalo com o clearInterval. 
//Para isso precisamos atribuir o setInterval a uma variável.
let a = 0;
const meuLoop = setInterval(()=>{
  console.log(a++);

  if(a > 20){
    clearInterval(meuLoop);
  }
}, 300);


//EXERCICIOS
// Mude a cor da tela para azul e depois para vermelho a cada 2s.
document.body.style.backgroundColor = 'red';
setTimeout(()=>{
  document.body.style.backgroundColor = 'blue';
}, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const btnResetar = document.querySelector('.resetar');

btnIniciar.addEventListener('click', handleIniciar);
btnPausar.addEventListener('dblclick', handlePausar);
btnResetar.addEventListener('click', handleResetar);

let segundos = 0;
let timer = 0;

const p = document.createElement('p');
document.body.appendChild(p);

function handleIniciar(){
  if(timer === 0){
    timer = setInterval(()=>{
      p.innerText = ++segundos
    }, 1000)
  }
};

function handlePausar(){
  clearInterval(timer);
  p.innerText = segundos;
  timer = 0;
};

function handleResetar(){
  clearInterval(timer)
  segundos = 0;
  p.innerText = segundos;
  timer = 0;
};