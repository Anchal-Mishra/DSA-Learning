let input=document.getElementById('input')
let output=document.getElementById('output')


function handleSum() {
    let inputVal = Number(input.value);
    let sum = 0;

    while (inputVal > 0) {
        let digit = inputVal % 10;
        inputVal = Math.floor(inputVal / 10);
        sum += digit;
    }

    output.innerText = `${sum}`;
}

function handleReverse(){
    let inputVal = Number(input.value);
    let reverse = " ";

    while (inputVal > 0) {
        let digit = inputVal % 10;
        inputVal = Math.floor(inputVal / 10);
        reverse += digit;
    }

    output.innerText = `${reverse}`;

}

