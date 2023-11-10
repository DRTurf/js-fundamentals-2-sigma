const generateOtp=()=>{
    return Math.floor((Math.random()*10)*1000);
}
console.log(`Here is your otp: ${generateOtp()}`);