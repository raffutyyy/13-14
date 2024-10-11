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
    let funcao = [ pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length, pessoa2.nome,  pessoa2.idade,  pessoa2.profissao, pessoa2.profissao.length]
   return funcao

}
console.log(y(pessoa, pessoa2))