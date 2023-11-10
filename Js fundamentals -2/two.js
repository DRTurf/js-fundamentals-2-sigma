const calculateTotalCartValue=(...arguments)=>{
    let sum=0;
    for (const iterator of arguments) {
        sum+=iterator;
    }
    console.log(`The total cart value is ${sum}`);
}

calculateTotalCartValue(125,200,300);