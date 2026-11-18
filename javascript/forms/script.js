const contato = document.querySelector('#contato');
console.log(contato.elements.nome);//elements serve para puxar os campos do meu form


console.log(document.forms[0]);//me retorna o primeiro elemento


//Value
//value vai puxar o valor digitado dentro do campo
console.log(contato.elements.nome.value);

const p = document.createElement('p');
document.body.appendChild(p);

function handleChange(event){
    console.log(event.target.value);
    p.innerText = event.target.value;
};

contato.addEventListener('change', handleChange);//change pega a mudança do campo, isso é melhor que keyup


//Validacao
//Preciso ter o campo do form com required.
//O método checkValidity verifica se um input com o atributo required, é válido ou não. 
//A propriedade validationMessage possui a mensagem padrão de erro do browser. 
//É possível modicar com setCustomValidity('')
function handleKeyUp(event){
    const target = event.target;

    if(!target.checkValidity()){//verifico se foi digitado um email valido
        target.classList.add('incorreto');//caso nao seja valido, sinaliza ao usuario
        contato.nome.setCustomValidity('Campo nome incorreto');//customizo msg de erro
        contato.email.setCustomValidity('E-mail é necessario');
        target.nextElementSibling.innerText = target.validationMessage;//exibe a mensagem erro
    }

    p.innerText = event.target.value;
};

contato.addEventListener('change', handleKeyUp);


//Select
function changeColor(event){
    document.body.style.backgroundColor = event.target.value;
};

contato.addEventListener('change', changeColor);


//CheckBox
function idade(event){
    if(event.target.checked){
        window.alert('maior de idade');
    };
};

contato.addEventListener('change', idade);


//Pegando todos os valores
//como pegar todos os valores de uma vez que o usuario digitar para voce mandar em um objeto
//para o servidor, por exemplo.
const dados = {};

function handleDados(event){
    dados[event.target.name] = event.target.value;
    console.log(dados);
};

contato.addEventListener('change', handleDados);