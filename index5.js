//---------------Module-20

// ----------Converter

// Ex-1

// function InchtoFeet(inches) {
//     console.log(inches);
//     const feet = inches / 12;
//     return feet;
// }

// const dadaInches = 144;
// const dadaFeet = InchtoFeet(dadaInches);
// console.log(dadaFeet);

// Ex-2

// function milesToKilo(miles) {
//     const kilometer = miles * 1.609;
//     return kilometer;
// }

// var kilo = milesToKilo(64);
// console.log(kilo);

// Ex-3

// function nanoTometer(nano) {
//     const meter = nano / 1000000000;
//     return meter;
// }

// var Meter = nanoTometer(9522284161616161);
// console.log(Meter);


//------------Odd or Even

// function isEven(number) {
//     const remainder = number % 2;
//     if (remainder === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }

// }

// const Mynumber = isEven(44);
// console.log(Mynumber);
// const HerNumber = isEven(51);
// console.log(HerNumber);


//------------Leap Year Or Not

// function isLeapYear(Year) {
//     const remainder = Year % 4;
//     if (remainder === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// var A = isLeapYear(1952);
// console.log(A);

//------------FindOddSum

function getSum(numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;

        console.log(index, element, sum);
    }

}

var Mynumbers = [10, 12, 16, 45];

getSum(Mynumbers);