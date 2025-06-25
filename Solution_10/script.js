let age=document.getElementById('input')
let output=document.getElementById('output')
console.log(typeof(age), age);


function handleAge(){
    let ageVal=Number(age.value)
    console.log(ageVal);
    
    if(ageVal < 14){
        output.innerText='Child';
    }
    else if( ageVal >=14 && ageVal < 18){
        output.innerText='Teenage';
    }
    else if( ageVal >=18 && ageVal < 40){
        output.innerText='Youth';
    }
    else if( ageVal >=40 && ageVal < 60){
        output.innerText='Young';
    }
    else{
        output.innerText='Old';
    }
}