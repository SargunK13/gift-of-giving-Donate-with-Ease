// Check if the user has already an account
function checkExistingAccount(email) {
    // A simple check to see if the user has already an account
    // In a real-world scenario, you would make a request to the server to check for the user account
    const existingUsers = ['user1@example.com', 'user2@example.com', 'user3@example.com'];

    return existingUsers.includes(email);
}

// Handle the form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Retrieve user input
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;

    // Validate user input
    if (username === '') {
        alert('Username is required.');
        return;
    }
    
    if (checkExistingAccount(email)) {
        alert('Email is already in use. Please choose a different one.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please re-enter the confirm password.');
        return;
    }

    // If the input is valid, continue with the registration process
    // Here we can use fetch or axios to send a request to the server for registering the user
    // In this example, I'm just displaying a success message
    alert('User registered successfully!');
}

// Add the event listener to the form
const registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit', handleFormSubmit);
