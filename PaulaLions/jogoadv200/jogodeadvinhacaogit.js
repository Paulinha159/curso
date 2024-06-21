/*1. Número máximo de tentativas;
2. Mostrar a quantidade de tentativas até acertar o número;
3. Mostrar se o usuário está quente ou frio, caso ele estiver perto ou longe do número;
4. Número fujão, após um número de tentativas mostre o número aleatório anterior e escolha outro.*/
const readline = require('readline');  // Importa o módulo readline para permitir a leitura de dados do usuário no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Gera um número aleatório entre 100 e 200
let aleatorio = Math.floor(Math.random() * 100 + 101);
let nome = "";
let numerodetentativas = 10;
const quantidade_numeros = 100;
let tentativaAtual = 0;
let ultimoAleatorio = aleatorio;  // Guarda o valor do número aleatório atual

console.log("Digite seu nome:");

rl.on("line", function (data) {
    if (!nome) {
        nome = data.trim();
        console.log("Bem-vindo " + nome + " ao jogo de adivinhação, digite um número de 100 a 200:");
    } else {
        let numero = parseInt(data.trim(), 10);
        tentativaAtual++;
        
        if (numero === aleatorio) {
            console.log("Você acertou!");
            process.exit();
        } else {
            numerodetentativas--;
            
            if (numerodetentativas > 0) {
                console.log("Você errou, você tem mais " + numerodetentativas + " tentativas.");

                // Verifica se o usuário está quente ou frio
                if (Math.abs(numero - aleatorio) <= quantidade_numeros * 0.05) {
                    console.log("Tá quente!");
                } else {
                    console.log("Tá frio!");
                }

                // Número fujão, muda o número aleatório após algumas tentativas
                if (tentativaAtual % 7 == 0 ) { // Pode ajustar o número de tentativas antes do número fujão
                    console.log("O número aleatório mudou! O número anterior era " + aleatorio);
                    ultimoAleatorio = aleatorio;
                    aleatorio = Math.floor(Math.random() * 100 + 101);
                }

                console.log("Digite outro número:");
            } else {
                console.log("Acabaram suas tentativas. O número era " + aleatorio);
                process.exit();
            }
        }
    }
});
