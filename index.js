//Criar um programa que calcula a média
//das turmas de alunos e envia 
//mensagem do cálculo da média.

const alunosTurmaA = [
    {
        nome: 'Paulo',
        nota: 6.5
    },
    {
        nome: 'Diego',
        nota: 7
    },
    {
        nome: 'Mayk',
        nota: 8
    },
    {
        nome: 'Guilherme',
        nota: 8
    }
]

const alunosTurmaB = [
    {
        nome: 'Cleiton',
        nota: 4
    },
    {
        nome: 'Fernando',
        nota: 2
    },
    {
        nome: 'Siclano',
        nota: 3
    },
    {
        nome: 'Priscila',
        nota: 7
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for ( let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota;
    }
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosTurmaA);
const media2 = calculaMedia(alunosTurmaB);



function enviaMensagem(media, turma){
    if (media > 5) {
        console.log(`A média da turma ${turma} foi ${media}. Parabéns!`);
    } else {
        console.log(`A média da turma ${turma} foi ${media}. Estude mais!`); 
    }
}

enviaMensagem(media1, 'A');
enviaMensagem(media2, 'B');