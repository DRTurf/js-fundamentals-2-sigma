function uniqueCharacterCheck(name){
    const Seto=new Set();
    for (const iterator of name) {
        if(Seto.has(iterator)){
            console.log("The input string contains duplicates.");
            return false;
        }
        else{
            Seto.add(iterator);
        }
    }
    console.log("The input string contains unique characters.");
    return true;
}

uniqueCharacterCheck("mithun");
uniqueCharacterCheck("anurag")