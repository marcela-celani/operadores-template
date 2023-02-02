/*// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')
let compara = minhaIdade > idadeAmiga
let diferenca = minhaIdade - idadeAmiga

console.log(`Sua idade é maior do que a do seu melhor amigo? ${compara}`)
console.log(`A diferença de idade entre você e seu best é? ${diferenca}`)
*/
// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'


//Não sou maior de idade e quero passear de carro
//Sou maior de idade e vou para a praia, e não quero passear de carro
//Vou para a praia ou quero passear de carro
//Posso tomar uma cervejinha e não vou passear de carro


const operacao1 = !b && d
const operacao2 = b && a && !d
const operacao3 = a || d
const operacao4 = c && !d
