//Display all test cases in a test suite with numbering.



let testCases = ["Valid credentials", "Invalid password", 
    "Empty username", "Empty password","Remember me checkbox"];

    console.log("Login Module Test Suite")
    console.log("━━━━━━━━━━━━━━━━━━━━━━━")

    for(let i = 0; i<testCases.length; i++)
    {
        console.log(i+1 +".  " +testCases[i]);
    }

    console.log()
    console.log("Total test cases: " +testCases.length)

// Exercise 1.5: Refactor with for...of Loop
console.log()
for(let testCase of testCases)
{
    console.log(testCases.indexOf(testCase)+1 +".  " +testCase);
}

//Exercise 2: Count Test Results
let testResults = ["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"]

console.log("Test Execution Results")
console.log("━━━━━━━━━━━━━━━━━━━━━━━")

let totalCount = 0 
let passCount = 0 
let failCount  = 0;
let skipCount = 0;

for(let result of testResults)
{
    totalCount++;
    if(result === "PASSED")
    {
        passCount++;
    }
    else if(result === "FAILED")
    {
        failCount++;
    }
    else if(result === "SKIPPED")
    {
        skipCount++;
    }
}

console.log("Counting results...")
console.log()
console.log("Test Statistics: ")

console.log("Total tests: " +totalCount)
console.log("Passed: " +passCount)
console.log("Failed: " +failCount)
console.log("Skipped: " +skipCount)

console.log()
console.log("Pass rate: " +((passCount/totalCount)*100) +"%")
console.log("Pass rate: " +((failCount/totalCount)*100) +"%")


// Exercise 3: Calculate Test Scores
let testScores = [85, 92, 78, 95, 88, 73, 90, 87];
let totalScore = 0

for(let i = 0; i<testScores.length; i++)
{
    totalScore += testScores[i];
}

console.log("Total Score = " +totalScore);
console.log("Average of score  = " + (totalScore/(testScores.length)));

let highestNum = testScores[0];
let lowestNum = testScores[0];
for(let i = 0; i<testScores.length; i++)
{
    if(highestNum < testScores[i])
    {
        highestNum = testScores[i];
    }

    if(lowestNum > testScores[i])
    {
        lowestNum = testScores[i];
    }
}
console.log("Highest score " +highestNum)
console.log("Lowest score " +lowestNum)


// Exercise 4: Find Failed Tests
let testNames = ["Login", "Logout", "Search", "Checkout", "Payment", "Profile"]
let results = ["PASSED", "FAILED", "PASSED", "FAILED", "PASSED", "FAILED"]

console.log("Test Execution Report")
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━")
console.log()
console.log("All Tests: ")
console.log()
let failedCount = 0;

for (let i = 0; i < results.length; i++) 
{
    console.log(`${i+1}. ${testNames[i]} : ${results[i]}`);
}
console.log()

for(let i = 0; i<results.length; i++)
{
     if (results[i] === "FAILED") {
        console.log(`Failed Test: ${testNames[i]}`);
        failedCount++;
    }
}

console.log()
console.log("Total failures:", failedCount);


//Exercise 5: Retry Logic with do...while

function runFlakyTest() {
    return Math.random() > 0.7; 
}

let testName = "Login Test"
let attempts = 0
let maxAttempt = 5
let passed = false

console.log("Retry Logic Test Runner")
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━")
console.log()

console.log("Running....." +testName)
console.log()



function runWithRetry(maxAttempts) {

    while (attempts < maxAttempts && !passed) {
        attempts++;
        passed = runFlakyTest();
        console.log(`Attempt ${attempts}: ${passed ? "PASSED" : "FAILED"}`);
    }

    if (passed) {
        console.log(`✅ Test passed after ${attempts} attempt(s)`);
    } else {
        console.log(`❌ Test failed after ${maxAttempts} retries`);
    }
}

runWithRetry(maxAttempt);