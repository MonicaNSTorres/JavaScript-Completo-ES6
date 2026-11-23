//Async/Await 
//async -> indica que tera partes assincronas
//await -> sempre que tiver uma promesa que quero esperar ocorrer
//async e await podem substituir o then
async function puxarDados(){
    const responseDados = await fetch('./dados.json');
    const jsonDados = await responseDados.json();

    
    console.log(jsonDados.aula)
}

puxarDados();


//Try/Catch
//para lidar com erros na promise, usamos o try e o catch
async function puxarClientes(){
    try{
        const responseClientes = await fetch('./clientes.json');
        const jsonClientes = await responseClientes.json();
        //document.body.innerText = jsonClientes.cliente;
    }
    catch(erro){
        console.log(erro);
    }
}

puxarClientes();


async function puxarFrases(){
    try{
        const api = await fetch('https://api.chucknorris.io/jokes/random');
        const jsonAPi = await api.json();

        const p = document.querySelector('p');
        p.innerText = jsonAPi.value;
    }catch(erro){
        document.body.innerText = erro;
    }
};

puxarFrases();