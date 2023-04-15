function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltabs')


     if(num.value.length == 0 ) {
       alert(' por favor digite um numero')
 }
     else{ 
        var n = Number(num.value)
        var c = 1 
        tab.innerHTML = ''
        
        for(var c = 1; c <=10; c++){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)

    }

  }
}