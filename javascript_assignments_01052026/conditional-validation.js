// Exercise 1: Email Validation

let emailId = "testuser@example.com";

if(emailId.includes('@') && emailId.includes('.'))
{
    console.log("✅ Valid email format");
}
else
{
    console.log("❌ Invalid email format");
}

// Exercise 2: Test Result Categorizer

let testResult = "SKIPPED";

if(testResult === "PASSED")
{
    console.log("✓ Test passed successfully")
}
else if(testResult === "FAILED")
{
    console.log("✗ Test failed - check logs")
}
else if(testResult === "SKIPPED")
{
    console.log("⊘ Test skipped")
}
else
{
    console.log("? Unknown test status")
}


//Exercise 3: Password Strength Checker
let password = "Test@123";

if(password.length < 6)
{
    console.log("❌ Weak password - too short")
}
else if(password.length >= 6 && password.length < 10)
{
    console.log("⚠️ Medium password strength")
}
else
{
    console.log("✅ Strong password")
}


// Exercise 4: Test Score Grading

let score = 85;
if(score >= 90)
{
    console.log("Grade: A (Excellent)")
}
else if(score <= 89 && score >=80)
{
    console.log("Grade: B (Good)")
} 
else if(score >= 70 && score <= 79)
{
    console.log("Grade: C (Average)")
}
else if(score >= 60 && score <= 69)
{
    console.log("Grade: D (Pass)")
}
else
{
    console.log("Grade: F (Fail)")
}


//Exercise 5: Early Return Pattern

function checkTestData(result, duration) 
{
    if (result !== null) {
        if (duration >= 0) {
            if (duration <= 10) {
                return "Valid: " + result + " in " + duration + "s";
            } else {
                return "Error: Duration too long";
            }
        } else {
            return "Error: Negative duration";
        }
    } else {
        return "Error: No result";
    }
}
console.log(checkTestData(null, 3));


//Exercise 6: Switch — Basic Value Matching
let testRslt = "UNKNOWN"

switch(testRslt)
{
    case "PASSED" : console.log("✓ Test passed successfully"); break;
    case "FAILED" : console.log("✗ Test failed - check logs"); break;
    case "SKIPPED" : console.log("⏳ Test pending - not yet run"); break;
    default : console.log("? Unknown test status")
}

//Exercise 7: Switch — Grouping Cases (Multiple Cases, One Outcome)
let statusCode = 503;

switch (statusCode) {
    case 200:
        console.log("✅ 200 OK — request successful");
        break;
    case 201:
        console.log("✅ 201 Created — resource created");
        break;
    case 400:
    case 401:
    case 403:
        console.log("❌ Client error — check your request");
        break;
    case 404:
        console.log("❌ 404 Not Found — endpoint does not exist")
        break;
    case 500:
    case 502:
    case 503:
        console.log("🔥 Server error — backend issue");
        break;
    default:
        console.log("? Unknown status code: " + statusCode);
}


//Exercise 8: Switch with Expressions
let age = 58;

switch(true)
{
    case age < 18 : 
        console.log("Junior");
        break;
    case age >= 18 && age < 60 : 
        console.log("Medium");
        break;
    case age >= 60 : 
        console.log("Senior");
        break;
    default : 
        console.log("Invalid age given");
}


// 8a: Switch on a computed value (grade buckets)

let scores = 100;

switch (Math.floor(scores / 10)) {
    case 10:
    case 9:
        console.log("Grade: A (Excellent)");
        break;
    case 8:
        console.log("Grade: B (Good)");
        break;
    case 7:
        console.log("Grade: C (Average)");
        break;
    case 6:
        console.log("Grade: D (Pass)");
        break;
    default:
        console.log("Grade: F (Fail)");
}


// 8b: Switch on `true` — range matching with expressions

let duration = 3.5;  // test duration in seconds

switch (true) {
    case duration < 1:
        console.log("⚡ Very fast test");
        break;
    case duration < 3:
        console.log("✅ Fast test");
        break;
    case duration < 6:
        console.log("⚠️ Acceptable — consider optimising");
        break;
    default:
        console.log("🐢 Slow test — needs attention");
}


//8c: Tricky questions — predict the output before running

let priority = "high";

switch (priority) {
    case "High":
        console.log("Urgent");
        break;
    case "high":
        console.log("Also urgent");
        break;
}