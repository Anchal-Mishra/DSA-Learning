let num1=document.getElementById('num1')
let num2=document.getElementById('num2')
let num3=document.getElementById('num3')
let output=document.getElementById('output')

console.log(num1);
console.log(num2);
console.log(num3);



function calculateSum(){
    let sum= (Number(num1.value) + Number(num2.value) + Number(num3.value))
    console.log(sum);
    
    output.innerText=`${sum}`
    
}
function calculateAverage(){
    let sum= (Number(num1.value) + Number(num2.value) + Number(num3.value))
    let average=sum/3
    console.log(average);
    
    output.innerText=`${average}`
    

}