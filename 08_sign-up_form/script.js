let content1 = document.getElementById('content1'); // First card Access
let content2 = document.getElementById('content2'); // Second card Access
let emailInput = document.getElementById('email'); // Email input field
let btn1 = document.getElementById('btn1'); // First Button access
let btn2 = document.getElementById('btn2'); // Second Button access
let emailOutput = document.getElementById('emailOutput'); // For span email update

// Function to update the email in the success message
function updateEmail() {
    emailOutput.textContent = emailInput.value; // Update the emailOutput span with the entered email
}

// Event listener to trigger email update on button click
btn1.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    updateEmail(); // Update the success message with the entered email
    content1.classList.add('hidden'); // Hide content1 (form section)
    content2.classList.remove('hidden'); // Show content2 (success message section)
});

// Event listener for btn2 click (Dismiss success message and return to form)
btn2.addEventListener('click', () => {
    content2.classList.add('hidden'); // Hide content2 (success message section)
    content1.classList.remove('hidden'); // Show content1 (form section)
});

// Email validation function
function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    const emailError = document.getElementById("emailError");

    if (emailPattern.test(emailInput.value)) {
        // Valid email: reset styles
        emailInput.classList.remove("border-tomato", "text-tomato", "bg-red-100");
        emailInput.classList.add("border-DslateGrey", "text-DslateGrey");
        emailError.classList.add("hidden"); // Hide error message
    } else {
        // Invalid email: show error with tomato color
        emailInput.classList.add("border-tomato", "text-tomato", "bg-red-100");
        emailInput.classList.remove("border-DslateGrey", "text-DslateGrey");
        emailError.classList.remove("hidden"); // Show error message
    }
}


// Add event listener to input field to validate email on each input
emailInput.addEventListener('input', validateEmail);

