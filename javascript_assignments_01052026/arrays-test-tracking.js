// Create an array to store test case names for a login module.

let testCases = ["Valid credentials", "Invalid password", 
    "Empty username", "Empty password","Remember me checkbox"];

console.log("Complete Array = " +testCases)
console.log("Total Number of testcases - " +testCases.length)
console.log("First testcase - " +(testCases[testCases.length - testCases.length]));
console.log("Last testcase - " +(testCases[testCases.length-1]));

//Build a test results array dynamically as tests run.

let testResults = [];

console.log("Running Test Suite.......")

testResults.push("PASSED");
console.log("Test 1 completed: " + testResults[testResults.length - 1]);

testResults.push("PASSED");
console.log("Test 2 completed: " + testResults[testResults.length - 1]);

testResults.push("FAILED");
console.log("Test 3 completed: " + testResults[testResults.length - 1]);

testResults.push("PASSED");
console.log("Test 4 completed: " + testResults[testResults.length - 1]);

testResults.push("SKIPPED");
console.log("Test 5 completed: " + testResults[testResults.length - 1]);

console.log("Total tests run:", testResults.length);
console.log("RESULTS: ", testResults);

for(testStatus of testResults)
{
    if(testStatus === "FAILED")
    {
        console.log(`Contains failures: Yes (found at index ${testResults.indexOf(testStatus)})`)
    }
}


//Manage test user emails using array methods.
let testEmails = ["user1@test.com", "user2@test.com", "user3@test.com"];

console.log("List of Emails - " +testEmails)
console.log("Count of Total number of emails in an array - "+testEmails.length)

testEmails.push("user4@test.com")
console.log("After adding user4@test.com to end: " +testEmails)

testEmails.unshift("admin@test.com")
console.log("After adding admin@test.com to beginning: " +testEmails)

//Remove last element - 
testEmails.pop();
console.log("After removing last email: " +testEmails)

//Remove first element - 
testEmails.shift();
console.log("After removing first email: " +testEmails)

console.log("Final Count - "+testEmails.length)


//Store and analyze test automation scores.
let testScores = [85, 92, 78, 95, 88, 73, 90];

console.log("Total number of scores - " +testScores.length)
console.log("First score - " +testScores[0])
console.log("Last score - " +testScores[testScores.length-1])

let target = 95;
let foundIndex = -1;

for (let i = 0; i < testScores.length; i++) {
    if (testScores[i] === target) {
        foundIndex = i;
        break;
    }
}

let result = foundIndex !== -1 ? "Yes" : "No";

console.log(`Score ${target} found: ${result} (index: ${foundIndex})`);


