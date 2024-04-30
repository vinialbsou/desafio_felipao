const readline = require('readline');

//criando interface para leitura de dados
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Aqui estou definindo uma fun��o em javascript com array do nivel de heroi a la Valorant
function buscandoNivelHeroi(nome, xp) {
    // Organizando a estrutura de dados com os n�veis de her�i
    const niveis = [
        { nivel: "Ferro", minXp: 0, maxXp: 1000 },
        { nivel: "Bronze", minXp: 1001, maxXp: 2000 },
        { nivel: "Prata", minXp: 2001, maxXp: 5000 },
        { nivel: "Ouro", minXp: 5001, maxXp: 7000 },
        { nivel: "Platina", minXp: 7001, maxXp: 8000 },
        { nivel: "Ascendente", minXp: 8001, maxXp: 9000 },
        { nivel: "Imortal", minXp: 9001, maxXp: 10000 },
        { nivel: "Radiante", minXp: 10001, maxXp: Infinity }
    ];

    // Usando loop para fazer depara do nivel do heroi com a experiencia informada
    let nivelHeroi = null;
    for (let data of niveis) {
        if (data.minXp <= xp && xp <= data.maxXp) {
            nivelHeroi = data.nivel;
            break;
        }
    }

    return nivelHeroi;
}

// Aqui mostrar os inputs do usu�rio
read.question('Digite o nome do heroi: ', (nome) => {
    read.question('Digite a quantidade de experi�ncia do heroi: ', (xp) => {
        xp = parseInt(xp);

        // Chamando a fun��o para buscar o n�vel do her�i
        const Result = buscandoNivelHeroi(nome, xp);

        console.log("O Heroi de nome ${nome} est� no n�vel de ${Result}");

        read.close();
    });
});
