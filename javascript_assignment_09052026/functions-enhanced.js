// ## Exercise 1: Default Parameters - Test Runner

function configureTest(testName, browser = "Chrome", timeout = 30000, environment = "staging")
{
    console.log("Test: " +testName)
    console.log("Browser: " +browser)
    console.log("Timeout: "+timeout  +"ms")
    console.log("Environment: " +environment)
}

configureTest("Login Test")
console.log()
configureTest("Login Test", "Firefox")
console.log()
configureTest("Login Test", "Safari", 60000)
console.log()
configureTest("Login Test", "Chrome", 30000, "production")


// ## Exercise 2: Guard Clauses - Form Validator
function validateForm(username, password, age) {
    if (username === "") {
        return "Username is required";
    }
    
    if (password.length < 8) {
        return "Password must be at least 8 characters";
    }

    if (age < 18) {
        return "Must be 18 or older";
    }

    return "Form is valid";
}

console.log(validateForm("", "Test@123", 25))
console.log(validateForm("john", "abc", 25))
console.log(validateForm("john", "Test@123", 16))
console.log(validateForm("john", "Test@123", 25))


// ## Exercise 3: Function Expressions - Password Validators
const hasMinLength = function(password) 
{
    return password.length >= 8;
}

const hasSpecialChar = function(password) {
    return (password.includes("@") || password.includes("!") || password.includes("#"));
};

const hasUppercase = function(password) {
    return /[A-Z]/.test(password);
};

let passwordValidators = [hasMinLength, hasSpecialChar,hasUppercase];

function validatePassword(password) {

    for (let i = 0; i < passwordValidators.length; i++) 
        {

        let isValid = passwordValidators[i](password);

        if (isValid) {
            console.log(`Passed check ${i + 1}`);
        } 
        else 
        {
            console.log(`Failed check ${i + 1}`);
            return false;
        }
    }
}

console.log("Validating: Test@123");
validatePassword("Test@123");

console.log("Validating: weak");
validatePassword("weak");


// ## Exercise 4: Factory Functions - URL Builder

function makeUrlBuilder(baseUrl)
{
    return function(path)
    {
        return baseUrl + path;
    }
}

let stagingUrl = makeUrlBuilder("https://staging.example.com")
let productionUrl = makeUrlBuilder("https://example.com")

console.log(stagingUrl("/login"))
console.log(productionUrl("/dashboard"))