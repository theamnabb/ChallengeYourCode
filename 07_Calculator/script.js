let inputDisplay = document.querySelector('.inputDisplay');
let keys = document.querySelectorAll('button');
let specialChars = ['/', '*', '-', '+', '=']


let calculate = (btnValue) => {
    if (btnValue === '=' && btnValue !== ''){
        output = eval(output.replace('%', '/100'))
    } else if(btnValue === 'reset'){
        output = ''
    
    }else if(btnValue === 'del'){
        output = output.toString().slice(0,-1)
    }

}
inputDisplay.value = output


keys.forEach((button) => {
    button.addEventListener('click',(e) => calculate(e.target.dataset.value));
});



