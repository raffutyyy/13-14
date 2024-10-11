const pessoa = {
    nome: 'arthur',
    idade: 24,
    musica: 'sertanejo'
   
}

function x(p) { 
   
    const novo = {
        ...p,
        comidas: ['massa', 'strogonoff', 'hamburger'],
        amigo: {
            nome: 'Fe',
            idade: 23
        }
    }
     
}





console.log(`O nome da pessoa é ${pessoa.nome} e suas comidas preferedas são`)



//console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.musica}`)
/*amigo: {
    nome: 'aaa',
    idade: 23
}
    */