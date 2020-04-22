function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var titulo = window.document.getElementById('titulo')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    img.src = 'morning.png'
    document.body.style.background = '#a991ff'
    titulo.innerHTML = 'Bom dia!'
} else if (hora >= 12 && hora < 18) {
    img.src = 'afternoon.png'
    document.body.style.background = '#7159c1'
    titulo.innerHTML = 'Boa tarde!'
} else {
    img.src = 'night.png'
    document.body.style.background = '#5a4996'
    titulo.innerHTML = 'Boa noite.'
}
}