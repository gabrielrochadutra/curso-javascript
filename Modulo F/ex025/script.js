

let num = document.getElementById('txtn')
let list = document.getElementById('txtl')
let vetor = []
let res = document.getElementById('res')

function testaRepetido(n, lista) {
    if (lista.indexOf(n) !== -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (num.value < 1 || num.value > 100 || num.value.length == 0 ) {
        window.alert('Erro')
    } else {
        let n = Number(num.value)
        let repetido = testaRepetido(n, vetor)
        if (repetido) {
            window.alert('Repetido')
        } else {
            vetor.push(n)
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            item.value = `list${n}`
            list.appendChild(item)
            res.innerHTML = ''
        }
    }
    num.value=''
    num.focus()
}

function analisar() {
    if(vetor.length == 0) {
        window.alert('Digite alguma coisa seu burro')
    } else {
        let total = vetor.length
        res.innerHTML=`Ao todo temos ${total} números cadastrados.`
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = vetor[0]
        if (vetor.length > 1) {
            soma = 0 
            for (let pos in vetor) {
                if (vetor[pos] > maior) {
                    maior = vetor[pos]
                }
                if (vetor[pos] < menor) {
                    menor = vetor[pos]
                }
                soma += vetor[pos]
            }
        }
        let media = soma/total

        res.innerHTML+=`<p>O maior valor informado é ${maior}.</p>`
        res.innerHTML+=`<p>O menor valor informado é ${menor}.</p>`
        res.innerHTML+=`<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML+=`<p>A média de todos os valores é ${media}.</p>`
    }
}