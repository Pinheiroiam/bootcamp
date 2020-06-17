//Crie um programa que armazena dados da empresa Rocketseat 
//dentro de um objeto chamado empresa.

const provider = {
    company: 'Rocketseat',
    color:'roxo',
    focus: 'Programação',
    adress: {
        street: 'Rua Guilherme Gembala',
        number: 260
    }
}

console.log(`A empresa ${provider.company} está localizada na ${provider.adress.street}, ${provider.adress.number}`);