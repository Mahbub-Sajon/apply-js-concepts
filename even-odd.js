function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}
const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log("Is my Number Even:", isMyNumberEven);

