//EXERCICIOS
// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const cep = document.querySelector('#cep');
const btn = document.querySelector('#buscar');

const campoCep = document.querySelector('#res-cep');
const rua = document.querySelector('#rua');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const uf = document.querySelector('#uf');
const regiao = document.querySelector('#regiao');

function handleCep(event){
    event.preventDefault();
    const viaCep = fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

    viaCep.then((resolucao)=>{
        return resolucao.json();
    }).then((body)=>{
        campoCep.innerHTML = body.cep;
        rua.innerHTML = body.logradouro;
        bairro.innerHTML = body.bairro;
        cidade.innerHTML = body.localidade;
        estado.innerHTML = body.estado;
        uf.innerHTML = body.uf;
        regiao.innerHTML = body.regiao;
    });
};

btn.addEventListener('click', handleCep);
