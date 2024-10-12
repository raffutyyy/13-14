let carrinho = []

let Fruta1 = {
    nome:'Uva',
    disponibilidade: true
}
let Fruta2 = {
    nome:'Abacaxi',
    disponibilidade: true
}
let Fruta3 = {
    nome:'Maça',
    disponibilidade: true
}

function mercado(fruta0, Fruta1, Fruta2){
 carrinho.push(fruta0, Fruta1, Fruta2)

}
mercado(Fruta1, Fruta2, Fruta3)
console.log(carrinho)
