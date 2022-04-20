function isLeapYear(year){
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                return true;
            }
            
        }
      
    }
    return false;
}
const myYear = 1600;
const isMyYearLeapYear = isLeapYear(myYear);
console.log("Is my year leapyear:", isMyYearLeapYear);

