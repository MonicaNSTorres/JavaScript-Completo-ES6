//Subclasses
//
class Veiculo{
    constructor(rodas){
        this.rodas = rodas;
    }
    acelerar(){
        console.log('acelerou');
    }
}

class Moto extends Veiculo {
    acelerar(){
        super.acelerar();
        console.log('Acelerou rápido');
    }
    empinar(){
        console.log(`Moto empinou com ${this.rodas} rodas`)
    }
};

const honda = new Moto(2);
const civic = new Veiculo(4);

console.log(honda.acelerar());


//Super
//uso para acessar um metodo que eu herdei
class Flor{
    constructor(especie, cor){
        this.especie = especie;
        this.cor = cor;
    }
    element(){
        const div = document.createElement('div');
        div.innerText = this.especie;
        div.style.backgroundColor = this.cor;
        return div;
    }
    frase(){
        return `A flor da espécie ${this.especie}, possui a cor ${this.cor}.`;
    }
}

const girassol = new Flor('Girassol', 'yellow');
console.log(girassol.element());
console.log(girassol.frase());

class Campo extends Flor{
    constructor(especie, cor, local){
        super(especie, cor);
        this.local = local;
    }
    frase(){
        return `${super.frase()} É encontrada em ${this.local}.`;
    }
}

const orquidea = new Campo('Orquidea', 'purple', 'Orquidario');
console.log(orquidea.frase()); 