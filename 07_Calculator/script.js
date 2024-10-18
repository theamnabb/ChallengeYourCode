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
        '--text-color': 'hsl(0, 0%, 100%)',
        '--btnBg': 'hsl(0, 0%, 90%)',
        '--btnBg1': 'hsl(0, 0%, 100%)',
        '--btnClr':'hsl(221, 14%, 31%)',
        '--btnHoverBg':'hsl(225, 11%, 69%)',
        '--equalBtnHover':'hsl(6, 49%, 59%)',

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
        '--grayish-blue': 'hsl(185, 58%, 25%)',
        '--text-color': 'hsl(60, 10%, 19%)',
        '--btnBg': 'hsl(0, 0%, 90%)',
        '--btnBg1': 'hsl(0, 0%, 100%)',
        '--btnClr':'hsl(221, 14%, 31%)',
        '--btnHoverBg':'hsl(185, 32%, 57%)',
        '--equalBtnHover':'hsl(25, 89%, 58%)',

    },
    3: {
        '--main-bg': 'hsl(224deg 49.87% 86.16%)',
        '--scr-bg': 'hsl(0deg 52.13% 44.61%)',
        '--keypad-bg': 'hsl(0deg 52.13% 44.61%)',
        '--resetBtn': 'hsl(0, 0%, 93%)',
        '--key-shadow': 'hsl(0deg 0% 0%)',
        '--red-key-togle': 'hsl(64.21deg 76.91% 63.13%)',
        '--equalShadow': 'hsl(0deg 0% 0%)',
        '--white': 'hsl(0deg 0% 0%)',
        '--grayish-blue': 'hsl(0deg 0% 0%)',
        ' --text-color':' hsl(0deg 0% 100%)',
        '--btnBg': 'hsl(0, 0%, 90%)',
        '--btnBg1': 'hsl(0, 0%, 100%)',
        '--btnClr': 'hsl(0deg 0% 0%)',
        '--btnHoverBg':'hsl(64.21deg 76.91% 63.13%)',
        '--equalBtnHover':'hsl(64, 78%, 39%)',
    }
};

// Function to apply theme based on slider value
let applyTheme = (theme) => {
    let selectedTheme = themes[theme];
    for (let variable in selectedTheme) {
        body.style.setProperty(variable, selectedTheme[variable]);
    }
};

// Add event listener to theme slider
themeSlider.addEventListener('input', (e) => {
    applyTheme(e.target.value);
});
applyTheme(1);



