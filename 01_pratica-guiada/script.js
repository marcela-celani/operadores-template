//PRÁTICA GUIADA 1 ==============================

let saldo
console.log(`Valor inicial do saldo: ${saldo}`)

//operação numero 1
saldo = 15
saldo = saldo + 22.40
console.log(`Valor do saldo após a primeira operação: ${saldo}`)

//operação numero 2
saldo = saldo - 12.34
console.log(`Valor do saldo após a segunda operação: ${saldo}`)

//operação numero 3
saldo = saldo / 3 
console.log(`Saldo de cada irmão: ${saldo}`)

//operação numero 4
saldo = saldo * 3.42
console.log(`Saldo após redimento: ${saldo}`)

//operação numero 5
//saldo assumirá o valor do resto da divisão do dinheiro por 3
saldo = saldo % 3
console.log(`Agora eu tenho: ${saldo}`)

//precedência aritmética
console.log(2 * 2 + 2)
console.log(2 * (2 + 2))

//PRÁTICA GUIADA 2 ==============================

const resultado1 = 5 === 5 
console.log(`comparação 1: ${resultado1}`)

const resultado2 = 5 !== 5 
console.log(`comparação 2: ${resultado2}`)

const resultado3 = 5 !== '5' 
console.log(`comparação 3: ${resultado3}`)

const resultado4 = 5 === 'cinco' 
console.log(`comparação 4: ${resultado4}`)

const resultado5 = typeof 5 === typeof 20 
console.log(`comparação 5: ${resultado5}`)

const resultado6 = typeof '5' === typeof 'cinco' 
console.log(`comparação 6: ${resultado6}`)

//PRÁTICA GUIADA 3 ==============================

const primeiroNumero = 15
const segundoNumero = 24

//Comparação 1
const compara1 = primeiroNumero === segundoNumero

console.log(`O primeiro número é igual ao segundo? ${compara1}`)

//Comparação 2
const compara2 = primeiroNumero <= segundoNumero

console.log(`O primeiro número é menor ou igual ao segundo? ${compara2}`)

//Comparação 3
const compara3 = primeiroNumero > segundoNumero

console.log(`O primeiro número é maior do que o segundo? ${compara3}`)

//Comparação 4
const compara4 = primeiroNumero < segundoNumero

console.log(`O primeiro número é menor do que o segundo? ${compara4}`)

//PRÁTICA GUIADA 4 ==============================

/* 
a: Quero dirigir um Celta 2012; 
b: Sou maior de idade; 
c: Consigo comprar o Celta por 22.000 reais;
d: Consigo alugar o Celta;
e: Tenho carteira de motorista;

Quero dirigir o Celta 2012 / a
Não sou maior de idade / !b
Sou maior de idade e não tenho carteira de motorista / b && !e
Sou maior de idade e consigo comprar ou alugar o Celta / b && (c || d) 
Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta / (b && e) && !a
*/