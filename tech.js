//Poderia usar um código mais simples apenas com a estrutura de repetição (for...of)

//const usuarios = [
//    {name: 'Carlos', tecnology: ['HTML', 'CSS']},
//    {name: 'Paulo', tecnology: ['JavaScript', 'CSS']},
//    {name: 'Cassia', tecnology: ['HTML', 'Node.js']}
//]
//for (let i = 0; i < usuarios.length; i++) {
//    for (let x = 0; x < usuarios[i].tecnology.length; x++) {
//        if (usuarios[i].tecnology[x] === 'CSS') {
//            console.log(`${usuarios[i].name} trabalha com ${usuarios[i].tecnology}`);
//        }
//    }
//}
    

const usuarios = [
    {name: 'Carlos', tecnology: ['HTML', 'CSS']},
    {name: 'Paulo', tecnology: ['JavaScript', 'CSS']},
    {name: 'Cassia', tecnology: ['HTML', 'Node.js']}
]

function checaSeUsuarioUsaCSS(users) {
    for (let tecnologia of users.tecnology){
        if (tecnologia == 'CSS') return true
    }
}

for (let i = 0; i < usuarios.length; i++) {
    const nome = checaSeUsuarioUsaCSS(usuarios[i])
    if (nome) {
        console.log(`O usuário ${usuarios[i].name} trabalha com CSS`);
    }
}
