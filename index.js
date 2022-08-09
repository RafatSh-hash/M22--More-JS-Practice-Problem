//-----------Problem 01

//var IamString = 'Hello,I am a String variables Data';
//var IamNumeric = 20;

//-----------Problem 02

// Changeable

// let Changeable = 20;
// Changeable = 30;
// console.log(Changeable);

// const Notchangeable = 20;
// Notchangeable = 21;
// console.log(Notchangeable);

//-----------Problem 03

// let num1 = 30;
// let num2 = 20;

// let addition = num1 + num2;
// console.log(addition);

// let substraction = num1 - num2;
// console.log(substraction);

// let multiplication = num1 * num2 ;
// console.log(multiplication);

// let division = num1 / num2 ; 
// console.log(division);\

//-----------Problem 04

// let num1 = 30;
// let num2 = 20;

// //Greater Than

// let result1 = (num1 > num2);
// console.log(result1);

// //Less Than

// let result2 = (num1 < num2);
// console.log(result2);

// //Is equal to

// let result3 = (num1 == num2);
// console.log(result3);

// // Not Equal to

// let result4 = (num1 != num2);
// console.log(result4);

// //Less than or Equal

// let result5 = ( num1 <= num2);
// console.log(result5);

// //Greater than or Equal to

// let result6 = (num1 >= num2);
// console.log(result6);


//----------------Problem 05

//----&& (AND)

// let established = true;
// let money = 2000 ;

// if ( established == true && money > 100000){
//     console.log("Marry me")
// }
// else{
//     console.log('Separate')
// }

//----|| (OR)

// let established = false;
// let money = 2000000 ;

// if ( established == true || money > 100000){
//     console.log("Marry me")
// }
// else{
//     console.log('Separate')
// }


//-----------------Problem 06

// let ExamMark = 90;

// if(ExamMark > 80){
//     console.log('Great Job! Keep It Up');
// }
// else {
//     console.log('Try Again, you will get it Exam')
// }


//---------------Problem 07

// 7,8,9,10,11,12,13,14,15,16,17,18,19

// let i = 7;
// while(i <= 19){
//     if ( i % 2 != 0){
//         console.log(i);
//     }
//     i++
// }


//---------------Problem 08

// let arr = [50, 60, 70, 80, 90, 10, 20, 30, 40 ];

//Lenth Of Array

// console.log(arr.length);

// Changing Value Of Index

// arr[4] = 100;
// console.log(arr);

//Adding Elements to Array

// arr.push(200, 300);
// console.log(arr);

//Removing Element from Array

// arr.pop();
// console.log(arr);


//----------------Problem 09

// let arr = [50, 60, 70, 80, 90, 10, 20, 30, 40 ];

// for(i = 0; i < arr.length; i++){
//     index = i;
//     element = arr[index];
//     console.log(index, element);

// }


//---------------Problem 10

// let arr = [50, 60, 70, 80, 90, 10, 20, 30, 40, 110, 82, 140, 470 ];

// for(i = 0 ; i <= arr.length; i++){
//     let index = i;
//     element = arr[index];
//     if (element > 80){
//         console.log(element);
//     }
// }


//---------------Problem 11

// function MultiplyNumbers(num1, num2, num3){
//     let mul = num1 * num2 * num3;
//     return mul;
// }


// let num1 = 10;
// let num2 = 20;
// let num3 = 2;
// let result = MultiplyNumbers(num1, num2, num3);
// console.log(result);


//---------------Problem 12

// let Phone = {
//     Brand : 'Xiaomi',
//     Ram : '4GB',
//     Battery : 3300,
// }

// Phone.Brand = 'Google';
// console.log(Phone);


//Problem Solving Checklist 01

// function feetToInch(inputFeet){
//     let Inches = inputFeet * 12;
//     return Inches;
// }
// let inputFeet = 40;

// let inch = feetToInch(inputFeet);
// console.log(inch);

//Problem Solving Checklist 02

// function centimeterToMeter(inputcent){
//     let Meters = inputcent / 100;
//     return Meters;
// }
// let inputcent = 80;
// let meter = centimeterToMeter(inputcent)


// console.log(meter);

//Problem Solving Checklist 03

//Constant Prices For Books
// const book1Page = 100;
// const book2Page = 200;
// const book3Page = 300;

// function pageRequired(QuantityOfBook1, QuantityOfBook2, QuantityOfBook3){
//     let pageRequiredforbook1 = (QuantityOfBook1 * book1Page);
//     let pageRequiredforbook2 = (QuantityOfBook2 * book2Page);
//     let pageRequiredforbook3 = (QuantityOfBook3 * book3Page);
//     totalbookpage = pageRequiredforbook1 + pageRequiredforbook2 + pageRequiredforbook3;

//     return totalbookpage;
// }


// let QuantityOfBook1 = 2;
// let QuantityOfBook2 = 3;
// let QuantityOfBook3 = 4;
// let TotalPage = pageRequired(QuantityOfBook1, QuantityOfBook2, QuantityOfBook3);
// console.log(TotalPage);

//Problem Solving Checklist 04

// let friends = ['Bayzid', 'Ashique', 'SultanaRupa'];

// function myBestFriend(friends){
//     for(i = 0; i < friends.length; i++){
//         let index = i;
//         element = friends[index];
//         if(friends[0].length > friends[1].length && friends[0].length > friends[2].length){
//             return friends[0];
             
//         }
//         else if(friends[1].length >friends[0].length && friends[1].length >friends[2].length){
//             return friends[1];
//         }  
//         else {
//             return friends[2];
//         }
//     }
// }

// let bestFriend = myBestFriend(friends);
// console.log(bestFriend);


//Problem Solving Checklist 05

// let numbers = [2, 34, 23, 43, 6, 78, 84, -89, 63, 8, 2];
// OnlyPositive = [];
// for(i = 0; i < numbers.length; i++ ){
//     index = i; 
//     element = numbers[index];
//     if (element > 0){
//         OnlyPositive.push(element);
//     }
//     else{
//         break;
//     }
    
// }
// console.log(OnlyPositive);

//-----------------More Problems 01

//  উপরের এরে থেকে ডুপ্লিকেট নম্বর গুলা বাদ দিয়ে উনিক নম্বর গুলা বের করতে হবে 

// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// function UniqueNumbers(numbers){
//     let Unique = [];
//     for(i = 0; i < numbers.length; i++){
//         index = i;
//         element = numbers[index];
//         if(numbers[i] != numbers[i+1]){
//             Unique.push(element);
//         }
        
//     }
//     return Unique;
// }

// let MyUniqueNumbers = UniqueNumbers(numbers);
// console.log(MyUniqueNumbers);

//-----------------More Problems 02


// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
//  উপরের আরে থেকে সব থেকে বড়ো নম্বর কোনটা বের করো 

// var numbers = [1, 2, 3, 4, 5, 6, 7, 90, 8, 9, 10, 20, 30, 40, 50, 60 ];

// function LargestNumber(numbers){
//     let Largest = numbers[0];
//     for(i = 0; i < numbers.length; i++){
//         let index = i;
//         let element = numbers[index];
//         if(element > Largest){
//             Largest = element;
            
//         }
//     }
//     return Largest;
// }

// let MyLArgestNumber = LargestNumber(numbers);
// console.log(MyLArgestNumber);


//------------------More Problems 03

//Dhora Jak Curret er prothom 100 unit er Price 5Taka kore, 100 par hole 200 porjonto unit price porbe 6 taka kore,
//  200 er beshi hole unit er price 200 er por ja ache tar price 8 taka kore.Dhora jak sumit er bill asche 240Unit er,
//   Current bill take koto pay korte hobe??


// let UnitPriceForFirst100 = 5;
// let UnitPriceForSecond100 = 6;
// let UnitPriceForThird100 = 8;

// function CurrentBill(unit){
//     if(unit < 100){
//         let Bill = UnitPriceForFirst100 * unit;
//         return Bill;
//     }
//     else if(unit > 100 && unit < 200){
//         let First100Bill = UnitPriceForFirst100 * 100;
//         let remains = unit- 100;
//         let BillforRemain = remains * UnitPriceForSecond100;
//         let TotalBill = First100Bill + BillforRemain;
//         return TotalBill;
//     }
//     else if(unit > 200){
//         let First100Bill = UnitPriceForFirst100 * 100;
//         let remains = unit - 200;
//         let BillForRemains = remains * UnitPriceForThird100;
//         let TotalBill = BillForRemains + First100Bill; 
//         return TotalBill;

//     }

// }

// let BillForSumit = CurrentBill(540);
// console.log('Sumit er Bill Ashbe :' ,BillForSumit, 'tk');


//------------------More Problem 3.1


//Dhora Jak Alif woord furniture banabe, proti Cubic feet wood er dam 114tk.
//chair banate khoroch hoy 5 cf
//table banate khoroch hoy 8 cf
// Khat banate khoroch hoy 12 cf
//Alif jodi 2ta table, 4 ta chair , 2 ta khat banate chay
//tar total khorcha koto taka hobe?


// let perChairWood = 5;
// let perTableWood = 8;
// let perBedWood = 12;
// let perCFWoodprice = 114;

// let NumOfChair = 4;
// let NumOfTable = 2;
// let NumOfBed = 2;

// function furniturePrice(NumOfChair, NumOfTable, NumOfBed){
//     const PriceForChair = perChairWood * perCFWoodprice * NumOfChair;
//     const PriceForTable = perTableWood * perCFWoodprice * NumOfTable;
//     const PriceForBed = perBedWood * perCFWoodprice * NumOfBed;

//     let TotalPrice = PriceForChair + PriceForTable + PriceForBed;
//     return TotalPrice;
// }

// let TotalFurniturePrice = furniturePrice(NumOfChair, NumOfTable, NumOfBed);
// console.log(TotalFurniturePrice);