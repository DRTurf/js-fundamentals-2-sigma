const listOfUsers = [
    "A",
    "B",
    "C",
    "D",
    "Mithun",
    "E",
    "F"
];
function isUserPresent(user){
    if(listOfUsers.includes(user)){
        console.log(`Yes, ${user} is a valid user.`);
    }
    else{
        console.log(`No, ${user} is not a valid user.`);
    }
}

isUserPresent("Mithun");

isUserPresent("Someone");