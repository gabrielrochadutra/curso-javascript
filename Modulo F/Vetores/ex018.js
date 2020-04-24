
let num = [3, 5, 8]
num[3] = 6 //adicionar um elemento
num.push(7) //adicionar um elemento
num.sort() //coloca em ordem
console.log(`${num}`)

// Repetições com arrays

let num = [8, 1, 7, 4, 2, 9]
for(let i=0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// Repetições com arrays usando o FOR/IN

let num = [8, 1, 7, 4, 2, 9]
for(let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// Repetições com arrays usando OF
// BUSCAR UM VALOR ESPECÍFICO

let num = [8, 1, 7, 4, 2, 9]
let i = num.indexOf(9)
console.log(i)
