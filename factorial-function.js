// let factorial = 1;
// for( i=1; i<=5; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

function factorial(input){
    let fact = 1;
    for(i=1; i<=input; i++){
        fact = fact * i;
    }
    return fact;
}
var digit = 5;
var number = factorial(digit);
console.log( "My firts factorial is", number);
var digit = 10;
var number = factorial(digit);
console.log( "My second factorial is", number);
var digit = 9;
var number = factorial(digit);
console.log( "My third factorial is", number);