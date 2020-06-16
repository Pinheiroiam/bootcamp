const nome = 'Ines'
const sexo = 'F'
const idade = 62
const contribuição = 23

if (sexo === 'M') {
    if (contribuição >= 35) {
        console.log(`${nome}, você já pode se aposentar!`);
    } else {
        const regra = idade + contribuição
        if (regra >= 95) {
            console.log(`${nome}, você já pode se aposentar!`);
        } else {
            console.log(`${nome}, você ainda não pode se aposentar!`);
        }
    }
} else {
    if (contribuição >= 30) {
        console.log(`${nome}, você já pode se aposentar!`);
    } else {
        const regra = idade + contribuição
        if (regra >= 85) {
            console.log(`${nome}, você já pode se aposentar!`);
        } else {
            console.log(`${nome}, você ainda não pode se aposentar!`);
        }
    }
}