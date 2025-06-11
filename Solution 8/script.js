let valueEl=document.getElementById('input')
let output=document.getElementById('output')

function handleNumber(){
    let valueEle=Number(valueEl.value)
    
    if(valueEle%2==0){
        output.innerText=`${valueEle} is even`;
    }
    else{
        output.innerText=`${valueEle} is odd`;
    }
}