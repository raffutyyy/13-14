//A) 
const pessoa = {
    nome: "José", 
    apelidos: ["zé", "zeca", "jo"]
 }

 //B) 
 const outraPessoa = {
    ...pessoa,
    apelidos: ['zezé','joseph','joca']
 }

 function x(pessoa) {
    
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]},  ${pessoa.apelidos[1]} ou  ${pessoa.apelidos[2]}`)

 }
 
 x(outraPessoa)