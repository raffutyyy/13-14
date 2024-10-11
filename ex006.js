const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// console 1: vai aparecer o nome, idade e a raça do cachorro 
// console 2: vai aparece as mesmas informações, exceto o nome que mudou "Juba"
// console 3: vai aparecer as mesmas informações do gato na tartauga, entretanto mudou todas as letras a do nome por o, ficando jubo



//B) pega as variaveis do outro objeto indicado
