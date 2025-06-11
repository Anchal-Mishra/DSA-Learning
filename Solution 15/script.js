const value1 = document.getElementById('val1');
const value2 = document.getElementById('val2');
const output = document.getElementById('output');

function calculate(op) {
    const val1 = parseFloat(value1.value);
    const val2 = parseFloat(value2.value);

    let result;

    switch(op) {
        case 'add':
            result = val1 + val2;
            break;
        case 'sub':
            result = val1 - val2;
            break;
        case 'mul':
            result = val1 * val2;
            break;
        case 'div':
            result = val2 !== 0 ? val1 / val2 : 'Cannot divide by 0';
            break;
        case 'mod':
            result = val2 !== 0 ? val1 % val2 : 'Cannot mod by 0';
            break;
        default:
            result = 'Invalid operation';
    }

    output.innerText = result;
}

function handleAdd() {
    calculate('add');
}
function handleSub() {
    calculate('sub');
}
function handleMul() {
    calculate('mul');
}
function handleDiv() {
    calculate('div');
}
function handleMod() {
    calculate('mod');
}
