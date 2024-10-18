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


// Theme

let themeSlider = document.querySelector('.theme-slider');
let body = document.body;

// Define themes as CSS variables
let themes = {
    1: {
        '--main-bg': 'hsl(222, 26%, 31%)',
        '--scr-bg':'hsl(224, 36%, 15%)',
        '--keypad-bg': 'hsl(223, 31%, 20%)',
        '--resetBtn': 'hsl(225, 21%, 49%)',
        '--key-shadow': 'hsl(240, 1%, 68%)',
        '--red-key-togle': 'hsl(6, 63%, 50%)',
        '--equalShadow':'hsl(6, 70%, 34%)',
        '--white':'hsl(0, 0%, 100%)',
        '--grayish-blue':'hsl(221, 14%, 31%)',
        '--text-color': 'hsl(0, 0%, 100%)'
    },
    2: {
        '--main-bg': 'hsl(0, 0%, 90%)',
        '--scr-bg': 'hsl(0, 0%, 93%)',
        '--keypad-bg': 'hsl(0, 5%, 81%)',
        '--white':'hsl(0, 0%, 100%)',
        '--resetBtn': 'hsl(185, 42%, 37%)',
        '--key-shadow': 'hsl(35, 11%, 61%)',
        '--red-key-togle': 'hsl(25, 98%, 40%)',
        '--equalShadow': 'hsl(25, 99%, 27%)',
        // '--key-bg-secondary': 'hsl(45, 7%, 89%)',
        '--grayish-blue': 'hsl(185, 58%, 25%)',
        '--text-color': 'hsl(60, 10%, 19%)',
    },
    3: {
        '--main-bg': 'hsl(268, 75%, 9%)',
        '--scr-bg': 'hsl(268, 71%, 12%)',
        '--keypad-bg': 'hsl(268, 47%, 21%)',
        '--resetBtn': 'hsl(281, 89%, 26%)',
        '--key-shadow': 'hsl(285, 91%, 52%)',
        '--red-key-togle': 'hsl(176, 100%, 44%)',
        '--equalShadow': 'hsl(177, 92%, 70%)',
        // '--key-bg-secondary': 'hsl(45, 7%, 89%)',
        '--grayish-blue': 'hsl(290, 70%, 36%)hsl(290, 70%, 36%)hsl(290, 70%, 36%)',
        '--text-color': 'hsl(0, 0%, 100%)',
    }
};

// Function to apply theme based on slider value
const applyTheme = (theme) => {
    const selectedTheme = themes[theme];
    for (let variable in selectedTheme) {
        body.style.setProperty(variable, selectedTheme[variable]);
    }
};

// Add event listener to theme slider
themeSlider.addEventListener('input', (e) => {
    applyTheme(e.target.value);
});



