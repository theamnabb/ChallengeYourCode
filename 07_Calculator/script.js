let inputDisplay = document.querySelector('.inputDisplay');
let keys = document.querySelectorAll('button');
let specialChars = ['/', '*', '-', '+', '='];
let output = '';

// Function to handle calculation logic
let calculate = (btnValue) => {
    if (btnValue === '=' && output !== '') {
        // Calculate the expression
        try {
            output = eval(output.replace('%', '/100'));
        } catch (error) {
            output = 'Error';  // Handle invalid expressions
        }
    } else if (btnValue === 'reset') {
        // Reset the output
        output = '';
    } else if (btnValue === 'del') {
        // Delete the last character from the output
        output = output.toString().slice(0, -1);
    } else {
        // Prevent adding special characters as the first character
        if (output === '' && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    
    // Update the display with the current output
    inputDisplay.value = output;
};

// Attach event listeners to each button
keys.forEach((button) => {
    button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});




