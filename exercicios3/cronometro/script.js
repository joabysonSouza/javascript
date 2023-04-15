var s = 0
var m = 0
var h = 0
var inter


function twodigit(digit){
    if(digit < 10)
    return('0' +digit)

else{
    return(digit)
 }
}


 
// ______________________________



function comecar(){
    counter()
     inter = setInterval(counter, 1000)
   
}
function pausar(){
  clearInterval(inter)
}
function parar(){
    clearInterval(inter)
   m = 0
   s = 0
   h = 0
   document.querySelector('.cont')
   .innerText = "00:00:00"
}
 function counter(){
    s++
    if(s==60){
        m++
        s=0
    } if (m==60){
        m=0
        h++
    }
    document.querySelector('.cont')
    .innerText =  twodigit(h) + ':' + twodigit(m)+ ':'+ twodigit(s)

    

 }