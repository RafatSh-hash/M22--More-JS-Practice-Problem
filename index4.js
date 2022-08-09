// ------------Slice

// var arr = [1, 2, 3, 54, 6554, 85, 45, 66, 22, 48]

// var sliced = arr.slice(2, 7);

// console.log(sliced);

// ---------------includes

// -------------------Substring
// var Ariana = "Ariana grande is singing";

// var subString = Ariana.substring(4, 15);
// console.log(subString);






// -------------------------MODULE 19---------------------------//

//------------Declaration of function
// function startFan() {
//     console.log("Stand Up");
//     console.log("Walk towards switch");
//     console.log("Press the switch");
// }

//------------call the function

// startFan();


// function bringwater(money) {
//     console.log("Take water");
//     console.log('eto taka disen :', money);
// }
// var taka = 300;
// bringwater(taka);

// ----------Multiple parameter

// function add(num1, num2) {
//     console.log('Going to Add :', num1, num2);
// }

// add(2, 3);

// function sum(a, b, c, d, e) {
//     console.log(a, b, c, d, e);
//     var sum = a + b + c + d + e;
//     console.log(sum);
// }
// sum(2, 2, 2, 2, 2);


// ---------------Return

// function sum(a, b, c, d, e) {
//     console.log(a, b, c, d, e);
//     var sum = a + b + c + d + e;
//     return sum;

// }
// var total = sum(2, 2, 2, 2, 2);
// console.log(total);

// function somosa(money) {
//     console.log(money);
//     var somosaPrice = 10;
//     var quantity = money / somosaPrice;
//     return quantity;
// }

// var bring = somosa(200);
// console.log(bring, 'ta somosa pabo');


// ----------------Examples

// function getAvg(ass1, ass2, ass3) {
//     const total = ass1 + ass2 + ass3;
//     const average = total / 3;
//     return average;
// }

// const ass1 = 60;
// const ass2 = 60;
// const ass3 = 55;

// var myAvg = getAvg(ass1, ass2, ass3);
// console.log('my average so far', myAvg);


// function add(num1, num2) {
//     var sum = num1 + num2;
//     return sum;
// }

// var total1 = add(35, 37);
// var total2 = add(55, 33);
// console.log(total1, total2);
// var final = add(total1, total2);
// console.log(final);


// -----------------Object

// var MyComputer = {
//     brand: 'lenovo',
//     price: 39000,
//     color: 'silver',
//     processor: 'i7'
// }
// console.log(MyComputer);
// console.log(MyComputer.price);
// MyComputer.processor = "i9";
// console.log(MyComputer);

// -----Properties
// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 3,
//     mouse: 1,
//     pen: 25,

// }

// //when you know the specific property name use . notation to get the property value
// var penCount = shoppingCart.pen;
// //when you know the specific property name use [''] or [" "] notation to get the property value
// var KeyboardCount = shoppingCart['keyboard'];

// var PropertieValues = Object.values(shoppingCart);

// var properties = Object.keys(shoppingCart);
// console.log(properties)


// -------Set Property Value

// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 3,
//     mouse: 1,
//     pen: 25,

// }


// shoppingCart.hen = 15;
// shoppingCart.books = 450;

// var mouse = shoppingCart['mouse'];
// shoppingCart['mouse'] = 70;
// console.log(shoppingCart);

// --------Object Looping

// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 3,
//     mouse: 1,
//     pen: 25,

// }

// var keys = Object.keys(shoppingCart);
// console.log(keys);

// var values = Object.values(shoppingCart);
// console.log(values);

// for (var i = 0; i < keys.length; i++) {
//     var PropertyName = keys[i];
//     var PropertyValue = shoppingCart[PropertyName];
//     console.log(PropertyName, PropertyValue);
// }