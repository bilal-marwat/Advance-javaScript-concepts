"use strict";
//defination this keyword

//this keyword JavaScript ka ek powerful concept hai jo current execution context ko refer karta hai. Ye different situations me different values le sakta hai, depending on ki code kis tarah se likha gaya hai aur kis tarah se call kiya gaya hai.


//Browser me, global scope me this hamesha window object ko refer karta hai.

// console.log(this);  // Output: [object Window]


const person = {
    name: "Muhammad Bilal",
    age: 20,
    greet: function () {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      console.log(this);
      
    }
}

person.greet();
person.name = "Muhammad Faisal";
person.greet();

console.log(this);


function greet() { 
    //Aapke code me undefined aane ka reason ye hai ki this.userName global scope me userName ko dhoondh raha hai, lekin aapne userName ko function ke andar let keyword ke saath define kiya hai. Is wajah se userName ek local variable hai aur this usko access nahi kar sakta kyunki this global context ko refer kar raha hai.
    // let userName = "Muhammad Bilal";
  console.log(this);

    //Breakdown:
    //Function Context: Jab aap this.userName likhte hain, to this global object ko refer kar raha hota hai. Global object me userName nahi hai, isliye undefined return hota hai.
    
    //Local Variable: Aapne userName ko let keyword ke sath define kiya hai, jo sirf function ke andar accessible hai, aur this usse directly refer nahi kar sakta.
}
greet();




function strcitMode(){
    "use strict";
    console.log(this);
}

strcitMode();

//function expression

// const greetExp = function () {
//     console.log(this);
// }
// greetExp();


// //arrow function
// const greetArrow = () => {
//     let userName = "Muhammad Bilal";
//     console.log(this.userName);
// }
// greetArrow();
//========================================================================================================

// This keyword work in Global Scope

// var student = "Bilal Marwat";
// console.log(window.student); // this keyword in global scope always represents gobal object in browser window object


// Q: if interviewer ask you what is the value of this inside global scope??
//Ans: it is global object that can be different it can be window it can be global it can be something else depending on the environment you are working in where are you running javascript code



//NOTED: this keyword work different under strict mode and non strict mode 


//this inside a function
function x(){
  console.log(this);  // results global  object window object 
  // if use strict mode then it will be undefined if strict mode is enabled then it will be global object window object
}
x();

// this inside non-strict mode - (this substitution)
/*
if the value of this keyword is undefined or null this keyword will be replaced with global object only in non strict mode 
*/




//this inside a object method

//inside a function is called as method

const user = {
    name : "Muhammad Bilal",
    age : 20,
    greet : function(){
        console.log(this.name); // this keyword inside object method will be object itself
    }
}
user.greet();