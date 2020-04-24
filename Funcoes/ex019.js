// Saber se um número é par ou impar

function parimp(n) { //FUNÇÃO
    if (n%2==0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res = parimp(11) //CHAMADA
console.log(res)