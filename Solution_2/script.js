let inp=document.getElementById('input')
let btn=document.getElementById('btn')
let div=document.querySelector('div')

console.log(val);



function handleClick(){
    let val=inp.value
    let result=(val*9/5)+32
    div.innerText=result
}
