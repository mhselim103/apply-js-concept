
function inchToFoot(inches) {
    var feet = inches / 12;
    return feet;
}


var myInches = 120;
var feet = inchToFoot(myInches);
console.log("my iches in foot", feet);



// mile to km

function mileToKm(miles) {
    var km = miles * 1.64;
    return km;
}
var marathon = mileToKm(30);
console.log(marathon);