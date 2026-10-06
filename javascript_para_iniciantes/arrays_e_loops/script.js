var paises = ["Holanda", "França", "Bélgica"];
console.log(paises[0]);

console.log(paises[0].length);

//adiciona mais um item
paises.push("Alemanha");
console.log(paises[3]);

//for para pecorrer um por um
for(var item = 0; item < paises.length; item++){
    console.log(paises[item]);
}

//break pode parar o loop
var imoveis = ["Casa", "Apto", "Fazenda", "Chacara"];
for(var i = 0; i < imoveis.length; i++){
    console.log('Chagou na fazenda');
    if(imoveis[i] === 1){
        break;
    }
}

//forEach executa uma funcao para cada item do array
var dias = ["segunda", "terça", "quarta", "quinta"];

dias.forEach(function(item){
    console.log(item)
})

//EXERCICIOS
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anos = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
anos.forEach(function(item){
    console.log(`O Brasil ganhou a copa de: ${item}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var item = 0; item < frutas.length; item++){
    console.log("Parou na Pera")
    if(frutas[item] === 2){
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);