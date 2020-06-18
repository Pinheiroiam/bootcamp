const usuarios = [
    {name: 'Carlos', tecnology: ['HTML', 'CSS']},
    {name: 'Paulo', tecnology: ['JavaScript', 'CSS']},
    {name: 'Cassia', tecnology: ['HTML', 'Node.js']}
]

for (let i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].name} trabalha com ${usuarios[i].tecnology.join(', ')}`);
}

