function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return "VALID";
    } else {
        return "INVALID";
    }
}


console.log(validateEmail("test@example.com"));  
console.log(validateEmail("notanemail"));  