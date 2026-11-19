//new Promise
//é uma função construtora de promessas
//existem dois resultados possiveis de uma promessa, ela pode ser resolvida ou rejeitada

//passo uma função de callback
//os dois primeiro valores passados, são funções especiais
const maiorIdade = new Promise(function(resolve, reject){
  let idade = 18;
  if(idade >= 18){
    resolve('Maior de idade');
  }else{
    reject(Error('Menor de idade'));
  }
});

console.log(maiorIdade);


//Then
//o que torna uma promisse especial, é o metodo que ela tem dentro do prototipo dela
//chamado de then, o callback que voce passar dentro desse metodo só vai ser ativado 
//quando a promise for resolvida
const promessa = new Promise(function(resolve, reject){
  let condicao = true;
  if(condicao){
    resolve({
      nome: 'Mônica',
      idade: 26
    })
  }else{
    reject(Error)
  }
});

promessa.then(function(resolucao){//espera a promessa ser resolvida, resolveu? Ativa!
  console.log(resolucao);
});

console.log(promessa);


//Assincrono
//as promises vão fazer sentido quando for usado um codigo assincrono dentro dela
const promessa1 = new Promise(function(resolve, reject){
  let condicao = true;
  if(condicao){
    setTimeout(()=>{
      resolve({
        nome: 'Mônica',
        idade: 26
      });
    }, 2000);

  }else{
    reject(Error);
  }
});

promessa1.then(function(resolucao){
  console.log(resolucao)
});

console.log(promessa1);


//Then().then()
//se retorna mais de uma promise, eu posso usar mais de um then
const retorno = promessa.then((resolucao)=>{
  console.log(resolucao);
  resolucao.nome = 'Nathalia';
  return resolucao;
})
.then((resolucao)=>{
  console.log(resolucao);
})
.catch((rejeitada)=>{//Catch -> serve para quando a promise for rejeitada
  console.log(rejeitada);
})
.finally(()=>{//Finally -> quando a promise acabar, executa ele independente se ela for resolvida ou rejeitada
  console.log('Promessa finalizada');
});

console.log(retorno);


//Promise.all
//é um objeto do metodo promise
const login = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve('Usuário logado');
  }, 1000)
});

const dados = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve('Dados carregados');
  }, 1500);
});

const carregouTudo = Promise.all(login, dados);

//posso mostrar em uma array
carregouTudo.then((resolucao)=>{
  console.log(resolucao)
})

console.log(carregouTudo);


//Race
//espera a primeira promise ser resolvida para resolver a segunda
const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then((resolucao)=>{
  console.log(resolucao);
});