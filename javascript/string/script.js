//String
//É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.
const comida = 'Pizza';//aqui retorna direto uma string
const liquido = new String('Água');//aqui retorna direto um objeto
const ano = new String(2026);//aqui retorna direto um objeto

//Length
//length me dá o total de caracteres que tem
console.log(comida.length);

//eu posso acessar essa string como se fosse um array
console.log(comida[0]);

const frase = 'é a programadora mais foda que existe';
console.log(frase[frase.length - 1]);

//str.charAt(n)
//retorna o caracter de acordo com o index de n
const nome = 'Mônica';

console.log(nome.charAt(0));
console.log(nome.charAt(nome.length - 1));//me retorna o ultimo

//str.concat()
//serve para concatenar string
const fraseCompleta = nome.concat(" ", frase, "!!");//posso concatenar quantas coisas eu quiser

console.log(fraseCompleta);

//str.includes()
//procura pela string exata dentro de outra string, a procura é case sensitive
const fruta = 'Manga';
const listaFrutas = ['Banana', 'Maça', 'Manga'];

console.log(listaFrutas.includes(fruta));//verifico se a fruta faz parte do array de listaFrutas
console.log(fruta.includes(listaFrutas));
console.log(fruta.includes(listaFrutas[2]));//consigo verificar de uma determinada posição

if(listaFrutas.includes(fruta)){//verifico se a fruta faz parte do array de listaFrutas
    console.log(`Inclui a ${fruta} na lista`);
}else if(fruta.includes(listaFrutas)){
    console.log(`Inclui a lista na ${fruta}`);
}else{
    console.log(`Não inclui a fruta ${fruta}`);
}

//str.endsWith e str.startsWith
//procura pela string exata dentro de outra string, a procura é case sensitive
const carro = 'Fiesta';

console.log(carro.endsWith('sta'));
console.log(carro.startsWith('fi'));//é case sensitive então vai me retornar false
console.log(carro.startsWith('Fi'));

//str.slice(start, end)
//corta a string de acordo com os valores de começo e fim
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); //Dep
transacao2.slice(0, 3); //Dep
transacao3.slice(0, 3); //Tax

transacao1.slice(12); //cliente
transacao1.slice(-4); //ente
transacao1.slice(3, 6); //ósi

//str.substring(start, end)
//corta a string de acordo com os valores de começo e fim, mas nao funciona com valores negativos
const linguagem = 'JavaScript';

console.log(linguagem.substring(3,5));
console.log(linguagem.substring(0,4));
console.log(linguagem.substring(4));
console.log(linguagem.substring(-3));

//str.indexOf() e str.lastIndexOf()
//vai me retornar exatamente a posição onde aquele caracter esta
const imovel = 'apartamento';

console.log(imovel.indexOf('r'));
console.log(imovel.lastIndexOf('nt'));

//str.padStart e str.padEnd()
//vai aumentar o tamanho da minha string
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item)=>{
    console.log(item.padStart(10, '-'))
})

//str.repeat(n)
//repete a string quantas vezes eu definir
const locomocao = 'avião';
console.log(locomocao.repeat(5));

//str.repleace(regexp|substr, newstr|function)
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

console.log(listaItens);

//str.split()
//divide a string de acordo com o padrão passado e retorna uma array
const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Maça', 'Manga'];
const listaFrutasArray = frutasArray.join(', ');
console.log(listaFrutasArray);

//str.toLowerCase() e str.toUpperCase()
//colocar em minusculo ou maiusculo o que foi digitado
//isso é bom pra verificar o input de um usuario, como ele digitou
const genero1 = 'feminino';
const genero2 = 'Feminino';
const genero3 = 'FEMININO';

if(genero1.toUpperCase()){
    console.log('digitou em maiusculo');
}else{
    console.log('digitou em minusculo');
};

//str.trim(), str.trimStart() e str.trimEnd()
//remove espaço de uma string, no inicio ou final
const valor = '  R$ 23.00   ';

console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());

//EXERCICIOS
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes2 = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let totalTaxa = 0;
let totalRecebimento = 0;

transacoes2.forEach((item)=>{
    const valorLimpo = +item.valor.replace('R$ ', ' ');//quando passo o + na frente, transforma em numero

    if(item.descricao.includes('Taxa')){
        totalTaxa += valorLimpo;
        console.log(totalTaxa);

    }else if(item.descricao.includes('Recebimento de Cliente')){
        totalRecebimento += valorLimpo;
        console.log(totalRecebimento);

    }else{
        console.log('não se enquadra');
    }
})

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const listaTransportes = transportes.split(';');

console.log(listaTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const listaHtml = html.split('span');
const novaListaHtml = listaHtml.join('a');

console.log(novaListaHtml);

// Retorne o último caracter da frase
const frase2 = 'Melhor do ano!';

console.log(frase2[frase2.length - 1]);

// Retorne o total de taxas
const transacoes3 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

const taxasTransacoes3 = transacoes3.join(',');
const taxasTransacoesMin = taxasTransacoes3.toLowerCase();

if(taxasTransacoesMin.includes('taxa')){
    console.log(`A palavra taxa aparece: ${taxasTransacoesMin.split('taxa').length - 1} vezes`)
}

//tem essa forma de fazer tambem
let taxasTotal = 0;
transacoes3.forEach((item)=>{
    item = item.toLowerCase();
    item = item.trim();

    if(item.includes('taxa')){
        ++taxasTotal
    }
})
console.log(taxasTotal);