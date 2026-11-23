//EXERCICIOS
// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const apiChain = fetch('https://blockchain.info/ticker');

apiChain.then((resolucao)=>{
    return resolucao.json();
}).then((body)=>{
    const div = document.createElement('div');
    document.body.appendChild(div);

    setInterval(()=>{
        div.innerHTML = (`Valor da compra do bitcoin em reais R$: ${body.BRL.buy}`);
        //console.log(body);
    }, 3000);
    
});

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btn = document.querySelector('.button');

function handlePiada(){
    const piada = fetch('https://api.chucknorris.io/jokes/random');
    piada.then((resolucao)=>{
        return resolucao.json();
    }).then((body)=>{
        const p = document.querySelector('p');
        p.innerHTML = (`Piada: ${body.value}`);

        console.log(body.value)
    });
};

btn.addEventListener('click', handlePiada);
