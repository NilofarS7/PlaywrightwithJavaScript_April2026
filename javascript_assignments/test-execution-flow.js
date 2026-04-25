let testStatus = "IN PROGRESS";
let testName  = "Login Functionality Test"
let testerName = "Priya"
let testStepNo = 1
let userName = "testuser@example.com"

console.log("==========================================")
console.log("      TEST EXECUTION FLOW                 ")
console.log("==========================================")
console.log("")

console.log("Test Name: "+testName)
console.log("Tester: "+testerName)
console.log("")

console.log("Step " +testStepNo+": " +"Opening browser")
console.log("Status: " +testStatus)
console.log("")

testStepNo = 2

console.log("Step " +testStepNo +": " +"Navigating to login page")
console.log("Status: "+testStatus)
console.log("")

testStepNo = 3

console.log("Step "+testStepNo +": " +"Entering credentials")
console.log("Username: "+userName)
console.log("Status: "+testStatus)
console.log("")

testStepNo = 4
console.log("Step "+testStepNo +": " +"Clicking login button")
console.log("Status: "+testStatus)
console.log("")

testStepNo = 5
testStatus = "COMPLETED"
console.log("Step "+testStepNo +": " +"Verifying dashboard")
console.log("Status: "+testStatus)
console.log("")

console.log("==========================================")
console.log("Final Status: " +testStatus)
console.log("Test Duration: 2.5 seconds")
console.log("==========================================")