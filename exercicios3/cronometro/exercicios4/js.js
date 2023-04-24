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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML=''

    }else {
        alert('valor invalido ou ja encontrado na lista ')
    }
     num.value = ''
     num.focus()

}
 function finalizar(){
    if(valores.length == 0 ){
        alert('adicione valores na lista ')
    }
    else{
        var total= valores.length
        var maior = valores[0]
        var menor = valores[0]
        for(var pos in valores){
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]

            
        }
        res.innerHTML = ''
        res.innerHTML += `<p>ao todo temos ${total} numeros cadrastados</p>`
        res.innerHTML += `<p> o maior valor foi ${maior}<p>`
        res.innerHTML += `<p> o menor valor foi ${menor}<p>`

    }
 }