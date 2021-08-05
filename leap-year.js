
function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    }
    return false;
}

var isLeapYear = leapYear(1800);
console.log(isLeapYear);
