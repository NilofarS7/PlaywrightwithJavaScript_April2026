//Design a Test Report

console.log("============================");
console.log("     LOGIN TEST SUITE       ");
console.log("============================");

console.log("Test 1: Login with valid credentials");
console.log("Status: PASSED");
console.log("");
console.log("Test 2: Login with invalid password")
console.log("Status: FAILED")
console.log("")
console.log("Test 3: Login with empty username field")
console.log("Status: FAILED")
console.log("")
console.log("Test 4: Login with special characters in username")
console.log("Status: PASSED")
console.log("")
console.log("Test 5: Remember me checkbox functionality")
console.log("Status: PASSED")
console.log("")

console.log("==========================================");
console.log("             TEST SUMMARY                 ");
console.log("==========================================");
console.log("Total Tests: 5")
console.log("✔ Passed: 3")
console.log("✗ Failed: 2")
console.log("==========================================");


//Create bug report - 

console.log("============================");
console.log("         BUG REPORT         ");
console.log("============================");
console.log("Bug ID - JIRA123")
console.log("Title - User is able to login with invalid username");
console.log("Steps to reproduce - ")
console.log("  1. Open Chrome browser")
console.log("  2. Enter the following url - www.abc.com")
console.log("  3. In the login section - Enter invalid username and validpassword")
console.log("  4. Click 'Login' button and verify if User login fails")
console.log("Expected result - User should not be able to login with invalid username")
console.log("Actual result - User is able to login with invalid username")
console.log("Severity - High")