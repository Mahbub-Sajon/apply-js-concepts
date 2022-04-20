function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}
var length = 256;
var nowFeet = inchToFeet(length);
console.log(nowFeet);

var length = 144;
var nowFeet = inchToFeet(length);
console.log(nowFeet);

var length = 612;
var nowFeet = inchToFeet(length);
console.log(nowFeet);