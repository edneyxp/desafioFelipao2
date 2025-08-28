//  Calculadora de partidas Rankeadas
var rds = require("readline-sync");   // objeto para ler dados do terminal

// Função para Classificar o heroi dependendo do calculo (vitórias - derrotas)

function calculaRank (win, lose){
    let rank = (win - lose);
    return rank;
}

function classificaHeroi (win) {
    let classe = "";

    if (win <= 10) {
        classe = "Ferro";
    } else  if ((win > 10) && (win <= 20 )) {
            classe = "Bronze";
        } else if ((win > 20) && (win <= 50 )) {
                classe = "Prata";
            } else if ((win > 50) && (win <= 80 )) {
                    classe = "Ouro";
                } else if ((win > 80) && (win <= 90 )) {
                        classe = "Diamante";
                    } else if ((win > 90) && (win <= 100 )) {
                            classe = "Lendario";
                        }  else if (win > 100) {
                                     classe = "Imortal";
                            }   else {
                                        classe = "Erro na classificacao!";
                            }
    return classe;
}
// Inicia o laço
do {
    console.log("\nOlá aventureiro, seja bem vindo a calculadora de partidas rankeadas.")
    var nomeHeroi = rds.question("Digite o nome do heroi: ");
    var vitorias = rds.question("Digite o numero de vitorias do heroi: ");
    var derrotas = rds.question("Digite o numero de derrotas do heroi: ");
    console.log(`Processando informaçãoes...\n\n`);

    
    let saldoWinHeroi = calculaRank(vitorias,derrotas);
    var nivel = classificaHeroi(saldoWinHeroi);
    
    // Exibe a saida para o usuario
    console.log(`Ola heroi ${nomeHeroi} ! `);
    console.log(`O Herói tem saldo de  ${saldoWinHeroi} vitorias e está no nível de ${nivel}\n\n`);
    
    // Verifica o laco de repeticao: Pergunta se quer consultar novamente ?
    var resposta = rds.question("Deseja classificar outro Heroi ? [S] SIM | [N] NAO: ");
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
} while (continua)

    console.log("\nObrigado por usar os nossos servicos. Ate breve!");
    console.log("\nMABtrix Soft agradece a sua preferencia.");