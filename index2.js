//Basic Function with return

// function add(num1, num2) {
//     console.log('Here are the numbers that we are going to Add :', num1, num2);
//     var total = num1 + num2;
//     return total;

// }

// var SumOfNumbers = add(30, 50);
// console.log(SumOfNumbers);

// function price(money) {
//     console.log(money);
//     var PuriPrice = 50;
//     var quantity = money / PuriPrice
//     return quantity;
// }

// var Puri = price(200);
// console.log(Puri);

// function Nums(mark1, mark2, mark3) {
//     console.log(mark1, mark2, mark3);
//     var totalMarks = mark1 + mark2 + mark3;
//     var avg = totalMarks / 3;
//     return avg;

// }
// var mark1 = 800;
// var mark2 = 200;
// var mark3 = 300;

// var MyavgMark = Nums(mark1, mark2, mark3);
// var fixed = MyavgMark.toFixed(2);
// console.log(fixed);

// ----------Object

// ----------Declaring Object
// var MyComputer = {

//     Processor: 'i5 fourth gen',
//     Ram: '4 + 4',
//     MotherBoard: 'Asus 75',
//     Keyboard: 'havit',
//     Mouse: 'Astrum',
//     Speaker: 'Microlab',
//     Monitor: 'Gigasonic, Skyview',
//     Cooler: 'FanTech',
//     Headphone: 'Havit'
// }

// console.log(MyComputer);

//-------Access Property Value

// console.log(MyComputer.Headphone);

//------ Adding New Keys
// MyComputer['Operatingsystem'] = 'Windows 11Pro';
// MyComputer.Mousepad = 'Razor';
// console.log(MyComputer);

// // using external var
// var lastUpdated = '8/4/22'
// MyComputer['Updated'] = lastUpdated;
// console.log(MyComputer);



// var Phone = {
//     Brand: 'Google',
//     Model: 'Pixel 3',
//     Ram: '4GB DDR3',
//     Rom: '128GB',
//     Display: 'P-OLED',
//     Camera: '12 mp',
//     Processor: 'Snapdragon 845',
//     Battery: '2915 mAh',
// }
// console.log(Phone);

//-------------know the value of the properties/keys
// var keys = Object.keys(Phone);
// console.log(keys);

// var values = Object.values(Phone);
// console.log(values);

// Looping In Object

//(This is just assigning multiple values in for loop and printing them all at once)
// for (var i = 0; i < keys.length; i++) {
//     var PropertyName = keys[i];
//     var PropertyValue = Phone[PropertyName];
//     console.log(PropertyName, PropertyValue);
// }


// Module 19 practice Problem 01



// Module 19 practice Problem 02

// function avg(int1, int2, int3) {
//     console.log(int1, int2, int3);
//     var totalNumber = int1 + int2 + int3;
//     var average = totalNumber / 3;

//     return average;

// }

// var int1 = 50;
// var int2 = 60;
// var int3 = 70;


// var Average = avg(int1, int2, int3);
// console.log('The average of the integers are :', Average);


// Module 19 practice Problem 03

// -------------Reduce Function
//-----Example

// var numbers = [1, 5, 45, 48, 65, 45, 6];

// var total = numbers.reduce((acc, cur) => {
//     return acc += cur;
// }, 0);

// console.log(total);

//--------------Solution Problem 03


// var nums = [10, 20, 30, 40, 50, 60];

// var TotalOfnums = nums.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
// }, 0);

// console.log(TotalOfnums);

// var TotalOfnums = 210;
// var numberOfNums = 6;
// function make_avg(total, totalsindex) {
//     console.log(total, totalsindex);
//     var avg = total / totalsindex;
//     return avg;
// }

// var Average = make_avg(TotalOfnums, numberOfNums);
// console.log(Average);



// var bookPrice = [180, 150, 230, 192, 450, 45, 80, 550, 68];



// for (var i = 0; i < bookPrice.length; i++){
//     var element = bookPrice[i];
    

//     if(bookPrice[i] > 200){
//         continue;
//     }
//     console.log(element);
// }


// ---------------new

// var fruits= ['Apple','Banana', 'Orange'];

// var indexOfBanana = fruits.indexOf('Banana');
// console.log(indexOfBanana);

// var num1 = 13;
// var num2 = 79;
// var num3 = 45; 

// if(num1 >  num2 && num1 > num3){
//     console.log("The largest number is :",num1)
// }
// else if(num2 > num3 && num2 > num1){
//     console.log("The largest number is :", num2)
// }
// else{
//     console.log("The Largest Number is :", num3)
// }


var DailyTask = ['Unlock Module', 'watch & Practice', 'Take Notes', 'solo practice', 'not understood', 'join support'];

//--------- for Loop

// for (var i = 0; i < DailyTask.length; i++){
    

//     var element = DailyTask[i];
//     if(element === 'not understood' && element == DailyTask[4]){
//         continue;
//     }
//     else{
//         console.log(element);
//     }
// }

//--------- While Loop

// var i =0;
// while(i <= DailyTask.length){
//     var element = DailyTask[i];
//     if(element === 'not understood' && element == DailyTask[4]){
//         continue;
//     }
//     else{
//         console.log(DailyTask);
//     }
//     i++;
// }

// -----------For Reverse

// for( var i = DailyTask.length; i >= 0; i--){
//         var element = DailyTask[i];
//     if(element === 'not understood' ){
//         continue;
//     }
//     else{
//         console.log(element);
//     }
// }

// ------Table of 13


// function thirteen(number){
   

//     for(var i = 1; i <= 100 ; i++){
//         var result = i * number ;
//         console.log(result);
//     }
//     return result;
// }
// var InputValue = thirteen(13);

// var name = "Sadman Yasir"
// var second = name;
// console.log(second.toLowerCase());

// ---------Transform to Lowercase

// function Tolowercase(input){
    
//     var transformed = input.toLowerCase();

//     return transformed;
// }

// var transformed = Tolowercase('SADMAN YASIR');
// console.log(transformed);

// ----------Display Full Name Function

// function fullname(fname, lname){
//     console.log(fname, lname);
//     var FullName = (fname + " " + lname);
//     return FullName;
// }

// fullname('Sadman', 'Yasir');

// function sqrof(number){
//     console.log(number);
//     var sqrResult = (number * number);
//     return sqrResult;
// }

// var sqrResult = sqrof(5);
// console.log(sqrResult);