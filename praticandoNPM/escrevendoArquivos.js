const fsPromises = require("fs/promises");
const path = require("path");
const { EOL } = require("os");
const os = require("os");







setInterval(async() => {


    let freeMemoryInBytes = os.freemem();
    let freeMemoryInMB = parseInt(freeMemoryInBytes / 1024 / 1024);
    
    let totalMemoryInBytes = os.totalmem();
    let totalMemoryInMB = parseInt(totalMemoryInBytes / 1024 / 1024);
    
    let usadoPorcentagem = parseInt((freeMemoryInBytes * 100) / totalMemoryInBytes);
    
    let conteudo = `{"total_memory":${totalMemoryInMB}MB, "free_memory":${freeMemoryInMB}MB, "usage":${usadoPorcentagem}%` + EOL  ;

    
    try {
        await fsPromises.appendFile(path.resolve(__dirname, "log.txt"), conteudo);
        console.log("adicionado")
    } catch(err) {
        console.log(err.message);
    }

}, 5);




/*
Exercício:

1. Crie um script que irá salvar as informações de memória a cada 5 segundos em um arquivo chamado log.txt

As informações devem ser salvas no seguinte formato:
{"total_memory":"xx MB", "free_memory":"xx MB", "usage":"xx %"}

Onde:
    * total_memory: Quantidade total de memória.
    * free_memory: Quantidade de memória livre.
    * usage: Porcentagem de uso da memória.

2. Crie um script que leia o arquivo alunos.json e escreva um arquivo aprovados.json com os alunos que foram 
aprovados. Para um aluno ser aprovado a média tem que ser maior ou igual à 6.

O aluno deve ser salvo no formato:
[
    {
        "matricula": 111,
        "nome": "João",
        "email": "joao@email.com",
        "notas": [10, 10, 10],
        "media": 10
    },
    {...}
]

3. Crie um script que leia o arquivo cpfs.txt e utilizando a biblioteca validator.js (https://github.com/validatorjs/validator.js/)
salve os cpfs válidos em um arquivo cpfsvalidos.txt e os cpfs inválidos em um arquivo cpfsinvalidos.txt.
*/