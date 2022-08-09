// var input = 'Hello';
// var lower = input.toLocaleUpperCase();
// console.log(lower);

// ----------Includes

var lyrics = 'tumi bondhu kala pakhi';
	// const doesitExist = lyrics.includes('pakhi');
	// console.log(doesitExist);
    // console.log(lyrics.indexOf('kala'));

    // console.log(lyrics.startsWith('kala'));


    // if(lyrics.indexOf('kala') != -1){
    //     console.log("It Exists")
    // }
    // else{
    //     console.log("Cant find it")
// }

//--------------Split

//------------Split by space

// var splitsbyspace = lyrics.split(' ');
// console.log(splitsbyspace);
    
//------------Split by charecters

// var splitbychar = lyrics.split('');
// console.log(splitbychar);

//--------------Slice
// var partial = lyrics.slice(5, 8);
// console.log(partial);

//--------------Substring

// var partial2 = lyrics.substring(5, 8);
// console.log(partial2);

//--------------Contcat/Join

// var lines = ['Hello World!', 'This is Sadman', 'Welcome to my project'];
// const sentence = lines.join();
// console.log(sentence);

//-------------With Dot/Comma

// var lines = ['Hello World!', 'This is Sadman', 'Welcome to my project'];
// const sentence1 = lines.join(',');
// console.log(sentence1);\


//---------------math js

//------------to the power

// const result = Math.pow(3, 3);
// console.log(result);


//-----------------Math.abs

// var num1 = 25;
// var num2 = 45

// var gap = Math.abs(num1 - num2);

// if( gap < 5){
//     console.log("Be friends");
// }
// else{
//     console.log("Stay Apart")
// }


//-----------------Math.round

// var num = 9.51461651;
// var fullNum = Math.round(num);
// console.log(fullNum);

//-------------Ceiling

// var num2 = 4.5161611;
// var ceiling = Math.ceil(num2);
// console.log(ceiling);

//------------Floor

// var num3 = 4.5161611;
// var Floor = Math.floor(num2);
// console.log(Floor);


//------------Random

// console.log(Math.random());

//-----------Make one / multiple random Whole number

// for(var i = 0; i <20; i++){
//     var random = Math.round(Math.random()*20);
//     console.log(random);
// }


//---------------SWAP- tempu

//-------------approach 01


// let num1 = 1;
// let num2 = 2;
// console.log(num1, num2);
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(num1, num2);


//-------------approach 02(Destructure)

// let num1 = 1;
// let num2 = 2;
// console.log(num1, num2);

// [num1 , num2 ] = [num2 , num1];

// console.log(num1, num2);

//--------------------Math.max, Math.min




// function maxInAnArray(height){
//     let largest = height[0];
//     for( let i = 0; i < height.length; i++);
//     let index = [i];
//     const element = height[index];
//     if(element > largest){
//         largest = element; 
//     }
//     return largest;
// }


// const height = [55, 45, 480, 950, 75];
// const tallest = maxInAnArray(height);
// console.log(tallest);



// Given an array Numbers = [40, 41, 51, 52, 62, 53, 95, 75, 74, 65, 62, 61, 20], You Have to answer that what is the SUM of the ODD numbers present in the array.

var Numbers = [40, 41, 51, 52, 62, 53, 95, 75, 74, 65, 62, 61, 20];

function GetOddNumber(Numbers){
    // console.log(Numbers); ---Displaying the Array
    let OddNumberArray= [];
    for(let i = 0; i < Numbers.length; i++){

        let index = i;
        // console.log(i); ---Displaying The Indexes of the Array,So its possible to get the index value from here
        let element = Numbers[index];
        // console.log(element); ----Displaying the Elements of the Array buy using there index

        if(element % 2 !== 0){
            OddNumberArray.push(element);
        }
    }
    return OddNumberArray;
}

function OddNumSum(OddNum) {
let TotalSum = 0;

    for (let i = 0; i < OddNum.length; i++){
        let index = i;
        let element = OddNum[index];
        TotalSum = TotalSum + element;
        //   console.log(index, element); ---Displaying the index and elements of the Newly Created odd number Array OddNumers

    }
    return TotalSum;
}

const OddNumbers = GetOddNumber(Numbers);
console.log(OddNumbers);
const SUM = OddNumSum(OddNumbers);
console.log(SUM);