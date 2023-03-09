
// /*get the number of characters*/

function updateCharLength() {
    const charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
}

function generatePassword() {
    const length = document.getElementById('length').value;
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
        console.log(numbers)
    }

    // Add symbols if selected
    if (symbols) {
        chars += '!@#$%^&*()_+';
    }

    // Generate password using selected options
    for (let i = 0; i <length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        const randomChar = chars[randomIndex];
        password += randomChar;
    }

    return password;
}

// Event listener for form submission
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const passwordInput = document.getElementById('password__result');
    passwordInput.value = ''; // Clear previous password

    const password = generatePassword();
    passwordInput.value = password;
});

// Event listeners for checkbox changes and range input changes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (const checkbox of checkboxes) {
    checkbox.addEventListener('change', updateCharLength);
}

const rangeInput = document.getElementById('length');
rangeInput.addEventListener('input', updateCharLength);
