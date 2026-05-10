// Exercise 1: Create Test Case Object

let testCase = {
    id: "TC-001",
    name: "Login with valid credentials",
    priority: "High",
    status: "Passed",
    duration: 2.5,
    browser: "Chrome"
}

console.log("Test Case Details")
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━")
console.log()

// Print each property using dot notation

console.log("Testcase Id is - " +testCase.id)
console.log("Testcase Name is - " +testCase.name)
console.log("Testcase Priority is - " +testCase.priority)
console.log("Testcase status is - " +testCase.status)
console.log("Testcase duration is - " +testCase.duration)
console.log("Testcase is running on  - " +testCase.browser +" browser")

console.log()
// Add a new property `tester` with value "John Doe"
testCase.tester = "John Doe"

// Modify the `status` to "Failed"
testCase.status = "Failed"

console.log("Adding tester...")
console.log("Changing status...")
console.log()

// Print the complete object
console.log("Updated Test Case - ")
console.log(testCase)


//Exercise 2: Test User Objects

let testUser1 = {
    username :"abc",
    password : "abc@1",
    email : "abc@gmail.com",
    role : "user"
}

let testUser2 = { 
    username :"mno",
    password : "mno@1",
    email : "mno@gmail.com",
    role : "user"}

let testUser3 = { 
    username :"xyz",
    password : "xyz@1",
    email : "xyz@gmail.com",
    role : "admin"}

let testUsers = [testUser1, testUser2, testUser3]

console.log("Test Users Database")
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━")
console.log()

for(let i  = 0; i<testUsers.length; i++)
{
    console.log("User " +(i+1) +":")
    console.log("Username: " +testUsers[i].username)
    console.log("Password: " +testUsers[i].password)
    console.log("Email: " +testUsers[i].email)
    console.log("Role: " +testUsers[i].role)
    console.log()
}

console.log("Summary: ")
let totalUsers = 0
let admin = 0
let regularUsers = 0
for(let i  = 0; i<testUsers.length; i++)
{
   if(testUsers[i].role === "user")
   {
    regularUsers++;
   }
   else
   {
     admin++;
   }

   totalUsers++;
 
}

console.log("Total users: " +totalUsers)
console.log("Admins: " +admin)
console.log("Regular users: " +regularUsers)


//Exercise 3: Test Results Array

let test1 = {
    testName : "Login Test",
    result : "PASSED",
    duration : 2.5
}

let test2 = {
    testName : "Logout Test",
    result : "FAILED",
    duration : 1.8
}

let test3 = {
    testName : "Search Test",
    result : "PASSED",
    duration : 3.2
}

let test4 = {
    testName : "Checkout Test",
    result : "SKIPPED",
    duration : 0.0
}

let test5 = {
    testName : "Payment Test",
    result : "PASSED",
    duration : 2.1
}

let testResults = [test1, test2, test3, test4, test5]

console.log("Test Execution Report")
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━")
console.log()
console.log("Test Results: ")
console.log()

for(let i = 0; i<testResults.length; i++)
{
    console.log((i+1) +". " +testResults[i].testName)
    console.log("Result: " +testResults[i].result)
    console.log("Duration: " +testResults[i].duration +"s")
    console.log()
}

console.log("Statistics: ")
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━")

let totalTests = 0;
let totalPass = 0;
let totalFail = 0;
let totalSkipped = 0
let passRate = 0.0;
let totalDuration = 0;

for(let i = 0; i<testResults.length; i++)
{
    if(testResults[i].result === "PASSED")
    {
        totalPass++;
    }
    else if(testResults[i].result === "FAILED")
    {
        totalFail++;
    }
    else
    {
        totalSkipped++;
    }

    totalDuration = totalDuration + testResults[i].duration;
    totalTests++;
}

console.log("Total tests: " +totalTests)
console.log("Passed: " +totalPass)
console.log("Failed: " +totalFail)
console.log("Skipped: " +totalSkipped)
console.log()
console.log("Total duration: " +totalDuration +"s")
console.log("Average duration: " +(totalDuration/totalTests)+"s")
console.log()

//Exercise 4: Object Methods and 'this' Keyword
let testRunner = {
    name: "Login Suite",
    totalTests: 5,
    passedTests: 0,
   failedTests: 0,

 start() {
    console.log(`Running test suite: ${this.name}`);
  },

  pass() {
    this.passedTests++;
    console.log(`Passed Tests: ${this.passedTests}`);
  },

  fail() {
    this.failedTests++;
    console.log(`Failed Tests: ${this.failedTests}`);
  },

  getReport() {
    const completedTests = this.passedTests + this.failedTests;
    console.log("Test Suite Report:")
    console.log("Name: " +this.name)
    console.log("Total tests :" +completedTests)
    console.log("Passed: " +this.passedTests)
    console.log("Failed: " +this.failedTests)
  }
}

console.log("Test Runner with Methods")
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━")
console.log()

testRunner.start();

testRunner.pass();
testRunner.pass();
testRunner.pass();

testRunner.fail();
console.log()
testRunner.getReport();

// Exercise 5: Deleting Properties
let testData = 
{
    username: "testuser@example.com",
    password: "Test@123",
    sessionToken: "abc123xyz",
    firstName: "John",
    lastName: "Doe"
}

console.log("Cleanup Sensitive Data")
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━")
console.log()
console.log("Before cleanup:")
console.log(testData)
console.log()

delete(testData.password)
delete(testData.sessionToken)

console.log("After cleanup:")
console.log(testData)
console.log()

console.log("Does 'password' exist? " +("password" in testData))
console.log("Does 'username' exist? " +("username" in testData))

// Exercise 6: Complete Test Tracker
