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
