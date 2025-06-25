let input=document.getElementById('input')
let output=document.getElementById('output')


function handleSum() {
    let inputVal = Number(input.value);
    let sum = 0;

        let firstDigit = inputVal % 10;
        inputVal = Math.floor(inputVal / 1000);
        let lastDigit = inputVal % 1000;

        sum = firstDigit+lastDigit;


    output.innerText = `${sum}`;
}


