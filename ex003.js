const infoFilme = {
    filme: 'titanic',
    diretor:'James Cameron',
    ano: 1997,
    elenco: ['Kate Winslet', 'Leonardo DiCaprio', 'Billy Zane'],
    personagens:['Rose', 'Jack', 'Cal'],
    assistiu: false
}

console.log(`${infoFilme.elenco[0]} como ${infoFilme.personagens[0]}`)
console.log(`${infoFilme.elenco[1]} como ${infoFilme.personagens[1]}`)
console.log(`${infoFilme.elenco[2]} como ${infoFilme.personagens[2]}`)

infoFilme.elenco[0] = 'Xuxa'


console.log(infoFilme.filme)
console.log(infoFilme.diretor)
console.log(infoFilme.ano)
console.log(infoFilme['assistiu'])
console.log(infoFilme.personagens)
console.log(infoFilme['elenco'])
