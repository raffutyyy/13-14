const pessoa = {
    nome: 'arthur',
    idade: 24,
    musica: 'sertanejo'
   
}

function x(p) { 
   
    const novaPessoa = {
        ...p,
        comidas: ['massa', 'strogonoff', 'hamburger'],
        amigo: {
            nome: 'Fe',
            idade: 23
        }
    }
    console.log(`O nome da pessoa é ${pessoa.nome} e suas comidas preferedas são ${novaPessoa.comidas[0]}, ${novaPessoa.comidas[1]}  e ${novaPessoa.comidas[2]}. Seu melhor amigo se chama ${novaPessoa.amigo.nome} e tem ${novaPessoa.amigo.idade} anos`)
}
x()





