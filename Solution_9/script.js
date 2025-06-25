let salary=document.getElementById('input')
let output=document.getElementById('output')
console.log(typeof(salary), salary);


function handleSalary(){
    let basicSalary=Number(salary.value)
    
    if(basicSalary <= 4000){
        let bon=basicSalary*0.25
        output.innerText=`${bon+basicSalary}`;
    }
    else if( basicSalary > 4000 && basicSalary <= 6000){
        let bon=basicSalary*0.35
        output.innerText=`${bon+basicSalary}`;
    }
    else{
        let bon=basicSalary*0.40
        output.innerText=`${bon+basicSalary}`;
    }
}