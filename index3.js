console.log("Hello!")

var v1 = 40;
var v2 = 60;

var result = v1 + v2;
// console.log(result)

var fname = "Tamim";
var lname = "iqbal";

var full_name = fname + " " + lname;
// console.log(full_name)



// numeric
var sunglass = 120;
//  String
var PlayerName = "Shakib"
// boolean
var isSingle = true;

// Integer = 120
// Float = 22.22

// -----Array--------
// How to declare an Array  :
var friendsAge = [10, 11, 12, 13, 14, 15, 16, 18, 19, 20];

var PicnicFee = [1000, 1100, 1200, 1300, 1400, 1500];

var player = ["Sakib", "Mushfiq", "Tamim", "Riad", "Rubel", "Taskin"];

// console.log(player);

//get Element By index

// console.log(player[5]);

var second = PicnicFee[1];
// console.log(second);

// changing an Array

PicnicFee[3] = 5000;
PicnicFee[1] = 4000;

// console.log(PicnicFee);


//Find index of an Element in Array

var positionOdIndex = PicnicFee.indexOf(1500);
// console.log(positionOdIndex);

// if Element is not found then console shows -1
var positionOdIndex = PicnicFee.indexOf(6000);
// console.log(positionOdIndex);

// Push-Pop
var num = [10, 20, 30, 40, 50];
num.push(60);
// console.log(num);

var N = ["Sakib", "Taskin"];
N.push("Mushfiq");
// console.log(N);
// Getting Rid of the last element

N.pop();
// console.log(N);

// using a variable 
var element = N.pop();
// console.log(element);

// adding an element at the first of array
N.unshift(-10, 0);
// console.log(N);

// pop an element at the first of array

N.shift();
// console.log(N);

// Compare

// console.log(50 > 60);
// console.log(50 < 60);
// console.log(5 == 6);
// console.log(5 == 5);
// console.log(5 !== 6);

// greater/lesser or equal


// console.log(5 <= 6);
// console.log(5 <= 4);
// console.log(5 >= 4);
// console.log(5 >= 5);

// var num1 = 10;
// var num2 = 20;

// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 == num2);
// console.log(num1 !== num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);

// Condition

// var price = 20000;
// var budget = 15000;

// if (budget > price) {

//     console.log("Buy");
// }
// else {
//     console.log("No");
// }



// ----------Multiple Condition
// var budget = 50000;
// var distance = 100;

//----------- Both Conditions are Right

// if (budget > 40000 && distance < 80) {
//     console.log("Go to Shop")
// }
// else {
//     console.log("Order from Daraz")
// }

//------------ Any of the given conditions are Right

// if (budget >= 50000 || distance < 50) {
//     console.log("Go to shop")
// }
// else {
//     console.log("Order From Daraz")
// }


// --------------Multi Stage Condition

// var money = 22;
// var danishPrice = 45;
// var butterbun = 35;
// var toast = 20;

// if (danishPrice < money) {
//     console.log("Danish");
// }

// else if (butterbun < money) {
//     console.log("ButterBun");
// }

// else if (toast < money) {
//     console.log("Toast");
// }

// else {
//     console.log("Cha")
// }


// -------- Module 16

//-------- Practice Problem 01

// var TotalMoney = 1000;
// var Expense = 700;

// var Cashback = (TotalMoney - Expense);
// console.log(Cashback);

//-------- Practice Problem 02

// var Mathematics = 75.25;
// var Biology = 65;
// var Chemistry = 80;
// var Physics = 35.45;
// var Bangla = 99.50;

// var totalnumber = Mathematics + Biology + Chemistry + Physics + Bangla;
// var Avg = totalnumber / 5;
// var fixed = Avg.toFixed(2);
// console.log(fixed);

//-------- Practice Problem 03

// var firstText = "I am going to be";
// var secondText = "an awesome web developer"

// var FullSentence = firstText + " " + secondText;
// console.log(FullSentence);

//-------- Practice Problem 04

// var FirstNumber = 119;
// var devider = 5;

// var remains = (FirstNumber % devider);
// console.log(remains);



// -------- Module 17

//-------- Practice Problem 01

// var Fruits = ["Apple", "Banana", "Orange"];

// var indexOfBanana = Fruits.indexOf("Banana");
// console.log(indexOfBanana);

// Fruits[1] = "Mango";
// console.log(Fruits);

// var removedOrange = Fruits.pop();
// console.log(Fruits);

// var addedWater = Fruits.push("Watermelon");
// console.log(Fruits);

//-------- Practice Problem 02

// var Tom = 66;
// var Jane = 95;
// var Peter = 56;
// var self = 85;

// if (Tom >= 80) {
//     console.log("A")
// }
// else if (Tom >= 60) {
//     console.log("B")
// }
// else if (Tom >= 50) {
//     console.log("C")
// }
// else if (Tom >= 40) {
//     console.log("D")
// }
// else {
//     console.log("Fail")
// }



// if (Jane >= 80) {
//     console.log("A")
// }
// else if (Jane >= 60) {
//     console.log("B")
// }
// else if (Jane >= 50) {
//     console.log("C")
// }
// else if (Jane >= 40) {
//     console.log("D")
// }
// else {
//     console.log("Fail")
// }



// if (Peter >= 80) {
//     console.log("A")
// }
// else if (Peter >= 60) {
//     console.log("B")
// }
// else if (Peter >= 50) {
//     console.log("C")
// }
// else if (Peter >= 40) {
//     console.log("D")
// }
// else {
//     console.log("Fail")
// }



// if (self >= 80) {
//     console.log("A")
// }
// else if (self >= 60) {
//     console.log("B")
// }
// else if (self >= 50) {
//     console.log("C")
// }
// else if (self >= 40) {
//     console.log("D")
// }
// else {
//     console.log("Fail")
// }



//-------- Practice Problem 03

// Largest Number

// var num1 = 11;
// var num2 = 79;
// var num3 = 45;

// if (num1 > num2 && num1 > num3) {
//     console.log("Number 1 is your largest Number")
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log("Number 2 is the Largest Number")
// }
// else {
//     console.log("Number Three is the Largest Number")
// }

// Isosceles

// var side1 = 19;
// var side2 = 8;
// var side3 = 9;

// if (side1 === side2 || side1 === side3) {
//     console.log("The Triangle Is Isosceles")
// }
// else {
//     console.log("The Triangle is not Isosceles")
// }


//------------Module 18

// ------------While Loop
// var roastGiven = 0;
// while (roastGiven < 7) {
//     console.log("Give Roast");
//     console.log(roastGiven);
//     roastGiven++;
// }

// var AskLoginInfo = 0;
// while (AskLoginInfo < 10) {
//     console.log("Please Login");
//     AskLoginInfo++;
// }

// var number = 1;
// while (number <= 10) {
//     console.log(number);
//     number = number + 1;
// }

// var number = 1;
// while (number <= 20) {
//     console.log(number);
//     number = number + 2;
// }

// var number = 0;
// while (number <= 20) {
//     console.log(number);
//     number = number + 2;
// }

// var number = 49;
// while (number >= 0) {
//     console.log(number);
//     number = number - 2;
// }

// -------------For Loop

// for (var roastGiven = 0; roastGiven <= 7; roastGiven = roastGiven + 1) {
//     console.log("Give Roast");
// }

// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (var i = 0; i <= 20; i = i + 2) {
//     console.log(i);
// }

// for (var i = 1; i <= 20; i = i + 2) {
//     console.log(i);
// }

// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

// ----------Array Loop

// target : display every element


// var numbers = [10, 20, 30, 40, 50, 60, 70, 80]

// for (var i = 0; i <= numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
// }


// var hi = ['sakib', 'mushfiq', 'tamim', 'taskin', 'soumya', 'rubel', 'kayes']

// for (var i = 0; i < hi.length; i++) {
//     var hlw = hi[i];
//     console.log(hlw);
// }

//-----------------Break with for Loop

// for (var i = 1; i < 20; i++) {
//     console.log(i);
//     if (i > 15) {
//         break;
//     }
// }

// --------------Break with while Loop

// var R = 0;
// while (R < 20) {
//     console.log("Neo");
//     R++;
//     if (R > 14) {
//         break;
//     }
// }



// ---------Break
// var numbers = [12, 165, 45, 84, 35, 15, 40, 66, 33, 22, 11, 54]

// for (var i = 0; i <= numbers.length; i++) {
//     var number = numbers[i];
//     if (number > 60) {
//         break;
//     }
//     console.log(number);
// }

// // ---------- Continue
// for (var i = 0; i <= numbers.length; i++) {
//     var number = numbers[i];
//     if (number > 60) {
//         continue;
//     }
//     console.log(number);
// }

// Reverse

// var num = 10;
// while (num >= 1) {
//     console.log(num);
//     num--;
// }

// for (var num = 50; num >= 1; num--) {
//     console.log(num);
// }


//------------Module 18-Practice Problem 01


// var step1 = "unlock Video"
// var step2 = "Watch & Practice"
// var step3 = "Take Notes"
// var step4 = "Solo Practice"
// var step5 = "Problem Faced"
// var step6 = "Join Session"
// var step7 = "Hurrah!"

// var Routine = ["unlock Video", "Watch & Practice", "Take Notes", "Solo Practice", "Problem Faced", "Join Session"];


// for (var i = 0; i <= 10; i++) {
//     console.log(Routine);
//     if (Routine.indexOf("Problem Faced") === 4) { continue; }

//     else { break; }

// }

// var AskLoginInfo = 0;
// while (AskLoginInfo < 10) {
//     console.log("Please Login");
//     AskLoginInfo++;
// }

// var line = 581;

// while (line <= 623) {
//     console.log(line);
//     line = line + 2;

// }


// var math = 150;
// var bio = 250;
// var phy = 170;
// var che = 350;
// var bot = 199;
// var rel = 152;


// var books = [math, bio, phy, che, bot, rel];

// for (i = 0; i <= 5; i++) {
//     if (books[i] > 200) {
//         continue;
//     }
//     console.log(books[i]);

// }



// var t1 = "Unlock Module";
// var t2 = "Watch & Practice";
// var t3 = "Take Notes";
// var t4 = "Solo Practice";
// var t5 = "Problem Found";
// var t6 = "Join Support";

// var DailyTask = [t1, t2, t3, t4, t5, t6];
// console.log(DailyTask);

// for (var i = 0; i <= 5; i++) {
//     if (DailyTask[i] == t5) {
//         continue;
//     }
//     console.log(DailyTask[i]);
// }
// if (DailyTask.indexOf[4] == t5) {
//     continue;
// }

// console.log(i)


// var learningItems = ["html", "css", "responsive", "bootstrap", "tailwind", "basic JS"];

// for (var i = 0; i < learningItems.length; i++) {
//     console.log(learningItems[i]);
// }

// var mobiles = ["Symphony", "Samsung", "Oppo", "Micromax", "Realme", "infinix", "Google Pixel"];

// var x = 0;
// while (x < mobiles.length) {
//     console.log(mobiles[x]);
//     x++;
// }