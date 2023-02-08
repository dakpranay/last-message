let button=document.getElementById('button');
let input=document.getElementById('input');
let result=document.getElementById('result');
button.onclick=function(){
    result.style.color='green'
    result.innerHTML=input.value
    input.value=''

}