function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagens')
 var data = new Date()
 var hora = data.getHours()
 
msg.innerHTML = `agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    // bom dia
    document.body.style.background = "#c5c53ecc"
    img.src = 'imagens/foto-manha.jpg'
    msg.innerHTML += ", bom dia!"

}
else if(hora >= 12 && hora < 18){
    img.src = 'imagens/foto-tarde.jpg'
    msg.innerHTML += " , boa tarde"
    
}
else 
{
    img.scr = 'imagens/foto-noite.jpg'
    document.body.style.background = "#16164bd3"
    msg.innerHTML += ', boa noite'

}
}