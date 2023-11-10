const students=[{
    name: "Mithun",
    marks:"95",
},
{
    name: "Prabir",
    marks:"75",
},
{
    name: "Alka",
    marks:"92",
},
{
    name: "Shivam",
    marks:"70",
},
{
    name: "Farman",
    marks:"99",
},
];


function checkResults(user){
    for (let iterator of students) {
        if(iterator.name===user){
            if(iterator.marks>90){
                return console.log(`Congratulations ${iterator.name}! You have cleared the exam.`);
            }
            else{
                return console.log("Sorry! you have not cleared the exam.");
            }
        } 
    }
        console.log("Invalid User!!!");
}

checkResults("Mithun");
checkResults("Prabir");
checkResults("Mithun S");