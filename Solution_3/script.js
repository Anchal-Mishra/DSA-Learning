let val1Input = document.getElementById('val1');
let val2Input = document.getElementById('val2');
let btn = document.getElementById('btn');
let outputDiv = document.querySelector('#output');

function handleClick() {
    let a = parseFloat(val1Input.value);
    let b = parseFloat(val2Input.value);

    if (isNaN(a) || isNaN(b)) {
        outputDiv.innerText = "Please enter valid numbers!";
        return;
    }

    // Before swap
    let beforeSwap = `Before Swap: val1 = ${a}, val2 = ${b}`;

    // Swap without third variable
    a = a + b;
    b = a - b;
    a = a - b;

    let afterSwap = `After Swap: val1 = ${a}, val2 = ${b}`;

    outputDiv.innerText = `${beforeSwap}\n${afterSwap}`;
}
