username=prompt("Enter your username")
password=Number(prompt("Enter your password"))
otp=Number(prompt("Enter your otp"))
if(username=="varshini_rao01" && password==578797){
    
    if(otp==3242){
        console.log("Login Successful")
    }
    else{
        console.log("Invalid OTP")
    }
}


else{
    console.log("Invalid Credentials")
}