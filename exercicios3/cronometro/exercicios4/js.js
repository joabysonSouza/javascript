let num = document.querySelector('input#num')
let lista = document.querySelector("select#flista")
let res = document.querySelector('div#res')
let valores = []


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inlista(num.value, valores)) {
        alert('tudo certo')

    }else {
        alert('valor invalido ou ja encontrado na lista ')
    }
   
}