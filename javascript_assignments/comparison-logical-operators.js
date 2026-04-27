// Exercise 1: Age Range Validation
let age = 25;
if(age >= 18 && age <= 65)
{
    console.log("✅ Valid age range (18-65)")
}
else
{
    console.log("❌ Age must be between 18 and 65")
}

//Exercise 2: Login Credentials Validator

let userName = "testuser"
let password = "Test@123"
let email = ""

if((userName != "" && password != "") || email != "")
{
    console.log("✅ Sufficient login credentials")
}
else
{
    console.log("❌ Insufficient credentials - provide username+password OR email")
}


//Exercise 3: Test Status Validator
let testStatus = "SKIPPED"
let errorCount = 0

if((testStatus === "PASSED" || testStatus === "SKIPPED") && errorCount === 0)
{
    console.log("✅ Test completed successfully")
}
else
{
    console.log("❌ Test has issues")
}

// Exercise 4: Response Time Validator
let respTime = 2.99999999

if(respTime < 3)
{
    console.log("✅ Performance test PASSED (response time: "+respTime +" seconds)")
}
else
{
    console.log("❌ Performance test FAILED (response time: X seconds, threshold: 3 seconds)")
}