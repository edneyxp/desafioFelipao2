class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
    }

    assar(){
        console.log("Assando bolo de "+ this.saborDaMassa);
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutelle");
let boloPremium = new formaDeBolo("laranja", "morango");

//console.log(boloFesta.saborRecheio);
boloFesta.escrever();
boloPremium.escrever();
boloFesta.assar();
boloPremium.assar();