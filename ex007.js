function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//A) false e undefined

//B) no primeiro console ele pergunta qual sobre backender da constante pessoa que é igual a false, entao será exibido false. No segundo é solicitado a altura da constante pessoa, entretanto a altura nao existe, sendo retornado entao undefined