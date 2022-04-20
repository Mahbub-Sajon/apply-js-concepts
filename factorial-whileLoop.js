// function getFactorial(input){
//     let factorial = 1; 
//     let i = 1;
//     while(i<=input){
//         factorial = factorial * i;
//         i++;  
//     }
//     return factorial;
// }
// var number = 5;
// var factorialIs = getFactorial(number);
// console.log("The factorial is ", factorialIs);


function getFactorial (input){
    let factorial = 1;
    let i = input;
    while(i>=1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
var digit = 6;
var factorialIs = getFactorial(digit);
console.log(factorialIs);