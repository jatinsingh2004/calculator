let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleButtonInput(e.target.innerHTML);
    });
});

// Function to handle input based on button content
function handleButtonInput(value) {
    if (value === '=') {
        string = eval(string);
        input.value = string;
    } else if (value === 'AC') {
        string = "";
        input.value = string;
    } else if (value === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
}

// Keyboard event listener
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleButtonInput('='); // Simulate '=' button click
    } else if (event.key === 'Backspace') {
        handleButtonInput('DEL'); // Simulate 'DEL' button click
    } else if (event.key === 'Escape') {
        handleButtonInput('AC'); // Simulate 'AC' button click
    } else {
        // Check if the pressed key is a number or an operator
        const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'];
        if (validKeys.includes(event.key)) {
            handleButtonInput(event.key); // Simulate button click for numbers/operators
        }
    }
});