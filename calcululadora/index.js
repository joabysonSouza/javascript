
var res = document.querySelector('#md')
var n1 = document.querySelector('#num1')
var n2 = document.querySelector('#num2')
let situa = document.querySelector('#sit')



function calcular(){
 
  let num1 = Number(n1.value)
  let num2 = Number(n2.value)
  

  let i = (num1 + num2) /2 
  res.value = (` ${i.toFixed(1)}`)
   
  
   

  if ( i >= 6){
    situa.placeholder = "aprovado "
    situa.style.backgroundColor = 'green'
   
  } 
   else if(i < 5){
    situa.placeholder = "reprovado "
    situa.style.backgroundColor = 'red'
  } 
  else{
    situa.placeholder = "recuperacao "
    situa.style.backgroundColor = 'orange'
  }
} 

function limpar(){
  num1.value = ''
  num2.value = ''
  res.value = ''
  situa.style.backgroundColor = ''
  situa.placeholder = 'Situação final'

  
  
  
}
