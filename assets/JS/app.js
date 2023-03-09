
// /*get the number of characters*/

function charLength() {
    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;
}

// function getPasswordLength() {
//     const passwordLength = document.getElementById('length').value;
//     return passwordLength;
// }

// Function to generate a password
function charLength() {

    const length = charLength();

    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    let chars = '';
    let password = '';

    // Add uppercase letters if selected
    if (uppercase) {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    // Add lowercase letters if selected
    if (lowercase) {
        chars += 'abcdefghijklmnopqrstuvwxyz';
    }

    // Add numbers if selected
    if (numbers) {
        chars += '0123456789';
    }

    // Add symbols if selected
    if (symbols) {
        chars += '!@#$%^&*()_+';
    }

    // Generate password using selected options
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        const randomChar = chars[randomIndex];
        password += randomChar;
    }
    function handleCheckboxClick() {
        const checkbox = document.getElementById('uppercaseCheckbox');
        if (checkbox.checked) {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const randomIndex = Math.floor(Math.random() * letters.length);
            const randomLetter = letters.charAt(randomIndex);
            console.log('Random uppercase letter:', randomLetter);
        }
    }


    const checkbox = document.getElementById('uppercaseCheckbox');
    checkbox.addEventListener('click', handleCheckboxClick);

    return password;
}


const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const passwordInput = document.getElementById('password__result');
    passwordInput.value = ''; // Clear previous password

    const password = generatePassword();
    passwordInput.value = password;


});