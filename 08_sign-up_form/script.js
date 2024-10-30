let content1 = document.getElementById('content1') // first card Access
let content2 = document.getElementById('content2') // Second card Access
let emailInput = document.getElementById('email') // inputfield Email
let btn1 = document.getElementById('btn1') // First Button aaccess
let btn2 = document.getElementById('btn2') // Second Button aaccess
let emailOutput = document.getElementById ('emailOutput'); // for span Email update 


// function updateEmail(){
//     emailField.textContent = emailInput.value;
// }

// btn2.addEventListener('click', updateEmail)

// input EventListener
function ValidateEmail(){
    let userEmail = emailInput.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailPattern.test(userEmail)){
        

    }

}

emailInput.addEventListener('input', ValidateEmail)