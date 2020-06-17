const developer = [
    {
        name:'Paulo',
        age: 38,
        technology: [
            {name: 'C++',especialty: 'Desktop'},
            {name: 'JavaScript', especialty: 'Web/Mobile'}
        ] 
    },
    {
        name:'Mayk',
        age: 36,
        technology: [
            {name: 'JavaScript', especialty: 'Web/Mobile'},
            {name: 'Python', especialty: 'Data Science'}
        ] 
    }
]

console.log(
    `O desenvolvedor ${developer[0].name} tem ${developer[0].age} anos e usa as tecnologias: 
    ${developer[0].technology[0].name} com especialidade em ${developer[0].technology[0].especialty} e 
    ${developer[0].technology[1].name} com especialidade em ${developer[0].technology[1].especialty}`
);

console.log(`
    O desenvolvedor ${developer[1].name} tem ${developer[1].age} anos e usa as tecnologias: 
    ${developer[1].technology[0].name} com especialidade em ${developer[1].technology[0].especialty} e 
    ${developer[1].technology[1].name} com especialidade em ${developer[1].technology[1].especialty}`
);
