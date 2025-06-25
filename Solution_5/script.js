let input=document.getElementById('input')
let output=document.getElementById('output')


function handleSum() {
    let inputVal = Number(input.value);

        let note100 = Math.floor(inputVal / 100);
        inputVal %=100;
        let note50=Math.floor(inputVal / 50);
        inputVal %=50 
        let note10=Math.floor(inputVal / 10);
        inputVal%=10
        let note1=inputVal; 
    output.innerText = `100 Notes:${note100}
                        50 Notes:${note50}
                        10 Notes:${note10}
                        1 Notes:${note1}`;
}



