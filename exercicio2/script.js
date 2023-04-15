function verificar(){  
 var data = new Date()
 var ano = data.getFullYear()
 var fano = document.getElementById("idade")
 var res = document.getElementById("res")  

  if(fano.value.length == 0 || fano.value > ano){
     window.alert("[ERRO]!!!verifique seus dados novamente")
  }else{
       var fsex = document.getElementsByName('sx')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

   }
   if(fsex[0].checked){
      var genero = 'homem'
      if(idade >= 0 && idade < 10){
         // crianca
         img.setAttribute('src', 'foto-bebe-m.png')

      }
      else if (idade <= 21){
         // jovem
         img.setAttribute('src', 'images/foto-jovem-m.png')

      }
      else if (idade < 50){
         // adulto
         img.setAttribute('src', 'images/foto-adulto-m.png')

      }
      else{
         // idoso
         img.setAttribute('src', 'images/foto-idoso-m.png')
      }

   }else{
      var genero = 'mulher'
      if(idade >= 0 && idade < 10){
         // crianca
         img.setAttribute('src', 'images/foto-bebe-f.png')

      }
      else if (idade <= 21){
         // jovem
         img.setAttribute('src', 'images/foto-jovem-f.png')

      }
      else if (idade < 50){
         // adulto
         img.setAttribute('src', 'images/foto-adulto-f.png')

      }
      else{
         // idoso
         img.setAttribute('src', 'images/foto-idoso-f.png')
      }
   }
    res.style.textAlign = "center"
    res.innerHTML = `detectamos ${genero}  de ${idade} anos `
    res.appendChild(img)











}
 
 