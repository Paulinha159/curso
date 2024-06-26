const consultas = [];
let consulta = {};
let opcao = 0;
let cadastrandoConsulta = false;
let removendoConsulta = false;
let atualizandoConsulta = false;
let atualizandoIndice = -1;
let campoAtualizando = '';

console.log("Bem-vindos, escolha uma das opções abaixo:");
console.log("1: Digitar as informações da consulta:");
console.log("2: Caso queira remover uma consulta");
console.log("3: Atualizar consulta");
console.log("4: Para ver as consultas que inseriu");
console.log("5: Sair do programa");

process.stdin.on("data", function (data) {
    let entrada_usuario = data.toString().trim();

    if (!opcao) {
        opcao = parseInt(entrada_usuario);

        switch (opcao) {
            case 1:
                console.log("Nome do paciente:");
                cadastrandoConsulta = true;
                break;
            case 2:
                console.log("Digite o nome do paciente a ser removido:");
                removendoConsulta = true;
                break;
            case 3:
                console.log("Digite o nome do paciente a ser atualizado:");
                atualizandoConsulta = true;
                break;
            case 4:
                if (consultas.length === 0) {
                    console.log("Nenhuma consulta cadastrada.");
                } else {
                    console.log("Consultas cadastradas:");
                    consultas.forEach((consulta, index) => {
                        console.log(`${index + 1}. Paciente: ${consulta.paciente}, Médico: ${consulta.medico}, Data: ${consulta.data}, Horário: ${consulta.horario}`);
                    });
                }
                opcao = 0;
                console.log("\nEscolha uma das opções abaixo:");
                console.log("1: Digitar as informações da consulta:");
                console.log("2: Caso queira remover uma consulta");
                console.log("3: Atualizar consulta");
                console.log("4: Para ver as consultas que inseriu");
                console.log("5: Sair do programa");
                break;
            case 5:
                console.log("Encerrando o programa...");
                process.exit();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                console.log("\nEscolha uma das opções abaixo:");
                console.log("1: Digitar as informações da consulta:");
                console.log("2: Caso queira remover uma consulta");
                console.log("3: Atualizar consulta");
                console.log("4: Para ver as consultas que inseriu");
                console.log("5: Sair do programa");
                break;
        }
    } else {
        switch (opcao) {
            case 1:
                if (cadastrandoConsulta) {
                    if (!consulta.paciente) {
                        consulta.paciente = entrada_usuario;
                        console.log("Nome do médico:");
                    } else if (!consulta.medico) {
                        consulta.medico = entrada_usuario;
                        console.log("Data:");
                    } else if (!consulta.data) {
                        consulta.data = entrada_usuario;
                        console.log("Horário:");
                    } else if (!consulta.horario) {
                        consulta.horario = entrada_usuario;
                        consultas.push(consulta);
                        console.log("Consulta cadastrada com sucesso!");
                        consulta = {};
                        opcao = 0;
                        cadastrandoConsulta = false;
                        console.log("\nEscolha uma das opções abaixo:");
                        console.log("1: Digitar as informações da consulta:");
                        console.log("2: Caso queira remover uma consulta");
                        console.log("3: Atualizar consulta");
                        console.log("4: Para ver as consultas que inseriu");
                        console.log("5: Sair do programa");
                    }
                }
                break;

            case 2:
                if (removendoConsulta) {
                    const paciente = entrada_usuario;
                    const index = consultas.findIndex(consulta => consulta.paciente.toLowerCase() === paciente.toLowerCase());
                    if (index !== -1) {
                        consultas.splice(index, 1);
                        console.log(`Consulta do paciente '${paciente}' removida com sucesso.`);
                    } else {
                        console.log(`Consulta do paciente '${paciente}' não encontrada.`);
                    }
                    opcao = 0;
                    removendoConsulta = false;
                    console.log("\nEscolha uma das opções abaixo:");
                    console.log("1: Digitar as informações da consulta:");
                    console.log("2: Caso queira remover uma consulta");
                    console.log("3: Atualizar consulta");
                    console.log("4: Para ver as consultas que inseriu");
                    console.log("5: Sair do programa");
                }
                break;

            case 3:
                if (atualizandoConsulta) {
                    if (atualizandoIndice === -1) {
                        const paciente = entrada_usuario;
                        atualizandoIndice = consultas.findIndex(consulta => consulta.paciente.toLowerCase() === paciente.toLowerCase());
                        if (atualizandoIndice !== -1) {
                            consulta = { ...consultas[atualizandoIndice] };
                            console.log("Digite o novo nome do paciente (deixe vazio para não alterar):");
                            campoAtualizando = 'paciente';
                        } else {
                            console.log(`Consulta do paciente '${paciente}' não encontrada.`);
                            opcao = 0;
                            atualizandoConsulta = false;
                            atualizandoIndice = -1;
                            console.log("\nEscolha uma das opções abaixo:");
                            console.log("1: Digitar as informações da consulta:");
                            console.log("2: Caso queira remover uma consulta");
                            console.log("3: Atualizar consulta");
                            console.log("4: Para ver as consultas que inseriu");
                            console.log("5: Sair do programa");
                        }
                    } else {
                        if (campoAtualizando === 'paciente') {
                            if (entrada_usuario) {
                                consulta.paciente = entrada_usuario;
                            }
                            console.log("Digite o novo nome do médico (deixe vazio para não alterar):");
                            campoAtualizando = 'medico';
                        } else if (campoAtualizando === 'medico') {
                            if (entrada_usuario) {
                                consulta.medico = entrada_usuario;
                            }
                            console.log("Digite a nova data (deixe vazio para não alterar):");
                            campoAtualizando = 'data';
                        } else if (campoAtualizando === 'data') {
                            if (entrada_usuario) {
                                consulta.data = entrada_usuario;
                            }
                            console.log("Digite o novo horário (deixe vazio para não alterar):");
                            campoAtualizando = 'horario';
                        } else if (campoAtualizando === 'horario') {
                            if (entrada_usuario) {
                                consulta.horario = entrada_usuario;
                            }
                            consultas[atualizandoIndice] = consulta;
                            console.log("Consulta atualizada com sucesso!");
                            consulta = {};
                            opcao = 0;
                            atualizandoConsulta = false;
                            atualizandoIndice = -1;
                            campoAtualizando = '';
                            console.log("\nEscolha uma das opções abaixo:");
                            console.log("1: Digitar as informações da consulta:");
                            console.log("2: Caso queira remover uma consulta");
                            console.log("3: Atualizar consulta");
                            console.log("4: Para ver as consultas que inseriu");
                            console.log("5: Sair do programa");
                        }
                    }
                }
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
                console.log("\nEscolha uma das opções abaixo:");
                console.log("1: Digitar as informações da consulta:");
                console.log("2: Caso queira remover uma consulta");
                console.log("3: Atualizar consulta");
                console.log("4: Para ver as consultas que inseriu");
                console.log("5: Sair do programa");
                break;
        }
    }
});
