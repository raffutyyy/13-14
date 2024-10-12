let pessoa = {
	nome: "Eduardo", 
  idade: 65, 
	profissao: "Contador"
}

let pessoa2 = {
    nome:'cleber',
    idade:55,
    profissao: 'médico'
}

function y(pessoa, pessoa2){
    let funcao = []
    funcao.push(pessoa.nome)
    funcao.push(pessoa.nome.length)
    funcao.push(pessoa.idade)
    funcao.push(pessoa.profissao)
    funcao.push(pessoa.profissao.length)
    funcao.push(pessoa2.nome)
    funcao.push(pessoa2.nome.length)
    funcao.push(pessoa2.idade)
    funcao.push(pessoa2.profissao)
    funcao.push(pessoa2.profissao.length)


   return funcao

}
console.log(y(pessoa, pessoa2))