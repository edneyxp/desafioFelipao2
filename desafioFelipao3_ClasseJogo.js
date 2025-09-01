class heroi{
    constructor (nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    apresentaHeroi(){
        console.log("\n\nDados do Heroi cadastrado:");
        console.log("Nome do Heroi: "+ this.nome);
        console.log("Idade do Heroi: "+ this.idade);
        console.log("Tipo do Heroi: "+ this.tipo);        
    }
    
    classificaAtaque (){
        let tipoHeroi = this.tipo;
        let ataque = "ERROR IN ATTACK";

        if (tipoHeroi === "mago"){
            ataque = "magia";
        } else if (tipoHeroi === "guerreiro"){
            ataque = "uma espada";
        } else if (tipoHeroi === "monge"){
            ataque = "artes marciais";
        } else {
            ataque = "uma shuriken";
        }           
        return ataque;
    }

    ataqueHeroi (){
       let ataque = this.classificaAtaque();
       console.log(`\n\nO heroi ${this.nome} se prepara para atacar...`);
       console.log(`O ${this.tipo} atacou usando ${ataque} `);
    }
}

function classificaHeroi(tipoHeroi){
    let classe = "";

    switch (tipoHeroi){
        case "1":
            classe = "mago";
            break;
        case "2":
            classe = "guerreiro";
            break;
        case "3":
            classe = "monge";
            break;
        case "4":
            classe = "ninja";
            break;
        default:
            classe = "indefinida"
            break;
    }
    return classe;
}

var rds = require("readline-sync");
do {
    console.log("\n\nBem vindo ao cadastro de Herois! \n\n");
    let nomeHeroi = rds.question("Digite o NOME do Heroi: ");
    let idadeHeroi = rds.question("Digite a IDADE do Heroi: ");
    console.log("Agora vamos cadastrar o tipo de heroi.");
    console.log("Digite o numero correspondente abaixo:");
    console.log("1 - para MAGO");
    console.log("2 - para GUERREIRO");
    console.log("3 - para MONGE");
    console.log("4 - para NINJA");
    let tipoHeroi = rds.question("");

    while ((tipoHeroi != 1) && (tipoHeroi != 2) && (tipoHeroi != 3) && (tipoHeroi != 4)){
        console.log("Opcao digitada invalida! Digite uma opcao entre 1 e 4 por favor:");
        tipoHeroi = rds.question("");
    }

    let classeHeroi = classificaHeroi(tipoHeroi);

    let novoHeroi = new heroi(nomeHeroi, idadeHeroi, classeHeroi);

    novoHeroi.apresentaHeroi();
    novoHeroi.ataqueHeroi();

    var resposta = rds.question("Deseja cadastrar outro Heroi ? [S] SIM | [N] NAO: ");
        resposta =  resposta.toUpperCase();
    
       // Verificacao de opcao digitada
    while ((resposta != "S") && (resposta != "N")){
        resposta = rds.question("Opcao incorreta. Digite [S] SIM | [N] NAO: ");
        resposta =  resposta.toUpperCase();        
    }

    switch (resposta){
        case "S":
            continua = true;
            break;

        case "N": 
            continua = false;
            break;

        default:
            console.log("\nOpcao invalida. Fechando classificador! \n");
            continua = false;
            break;

        
    }


} while (continua) // Fim do laço
// Mensagem de agradecimento
console.log("\nObrigado por usar os nossos servicos. Ate breve!");
console.log("\nMABtrix Soft agradece a sua preferencia.");