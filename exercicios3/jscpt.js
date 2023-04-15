function contar(){
   var ini = document.getElementById('txti')
   var fim = document.getElementById('txtf')
   var pass = document.getElementById('txtp')
   var res = document.getElementById('res')

     if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
      alert('[ERRO] Verifique seus dados')

     }

     else{
          res.innerHTML = "Contando... "
          var i = Number(ini.value)
          var f = Number(fim.value)
          var p = Number(pass.value)

          if(p <= 0){
            alert('passo invalido considerando passo 1')
            p =1
            
          }

       if( i < f){ 
         // contagem crescente

         for(var c = i; c <= f ; c += p){
         res.innerHTML += ` \u{1f449}${c} `
        } 
      }else{
         // contagem decrescente
         for(var c = i; c >= f ; c -= p){
            res.innerHTML += ` \u{1f449}${c} `

       }
      }
      res.innerHTML += `\u{1f3c1}`
     } 
   }
