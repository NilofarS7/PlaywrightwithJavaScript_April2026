// ### Part 1: Basic Functions

// Function to generate email
function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
}

let email = generateEmail("nilofar", "shaikh")
console.log("Email is - " +email)

// Function to generate username
function generateUsername(firstName, lastName) {
    return firstName.toLowerCase() + lastName.toLowerCase();
}

let userName = generateUsername("Nilo", "Sh")
console.log("Username is - " +userName)

// Function to generate password
function generatePassword(prefix) {
    return prefix + "@123";
}

let password = generatePassword("Test");
console.log(password)