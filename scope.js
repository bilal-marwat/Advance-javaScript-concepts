// defination of scope in programming
// scope is a concept in programming that determines the accessibility of variables and functions within different parts of a program.

// There are two types of scope in programming:
// 1. Global scope: Variables and functions declared outside of any function are accessible from anywhere in the program.
// 2. Local scope: Variables and functions declared inside of a function are only accessible within that function.

// Global scope is accessible from anywhere in the program, while local scope is only accessible within the function in which it is declared.



// Local Scope ka basic concept yeh hai ke jo bhi variable kisi function ya block ke andar declare hota hai, uska scope sirf ussi area tak limited hota hai. Iska matlab hai ke wo variable sirf usi jagah pe use ho sakta hai.



// sab sy pehly jo scope ke baaat aatee hain yee start hutee hain 3 key words
// 1. var
// 2. let
// 3. const

let x = 400;
if(true){
    let x = 10; //esko hum scope sy bahir access kar rahy hain yee hamar error degy q k esko hum scope k bahir access kar rahy hain
    const y = 20; // same as let
    // var z = 30;  avoide use var
    console.log(x);
    

}

// console.log(x);
// console.log(y);
console.log(x);

// curly braces {} esko scope kehty yahan sy scope shuru huta hain
// object mai b curly braces huty hain liken wo object declaration hain


// Chalo scope ka topic shuru karte hain! Scope programming ka ek important concept hai, jo batata hai ke variables aur functions kahaan tak accessible hain. Step-by-step samajhte hain:


// Scope Kya Hota Hai?
// Scope define karta hai ki program ke kis part mein variables aur functions access kiye ja sakte hain. Yeh determine karta hai ki kisi specific variable ko code ke kis part mein use kiya ja sakta hai.


// Types of Scope:
// Global Scope
/// Local Scope (Function Scope aur Block Scope)


// Global Scope
// Jab koi variable ya function globally declare kiya jata hai, matlab function ke bahar, toh woh global scope mein hota hai.
// Global variables ko program ke kisi bhi part mein access kiya ja sakta hai.


let globallVariable = "I am globall variable you use me every where in programm";
function checkScope (){
    console.log("INSIDE FUNCTION ", globallVariable); // access here globallVariable
}

checkScope();
console.log("OUTSIDE FUNCTION ", globallVariable);


// 2. Local Scope

// Local scope ka matlab hai ke variables ya functions sirf apni defined jagah (function ya block) mein access ho sakte hain. Yeh further do types mein divide hota hai:

// a) Function Scope
// Variables jo function ke andar declare kiye gaye hain, sirf us function ke andar hi accessible hote hain.
// Function ke bahar se in variables ko access nahi kiya ja sakta.

// EXAMPLE 1: Function Scope
function checkScope(){
    let localVariable = "I am local variable you use me only in function";
    console.log(localVariable);
}
checkScope();
// console.log(localVariable); // error


let globalVar = "I am global";

function outerFunction() {
  let outerVar = "I am from outer function";
  
  function innerFunction() {
    let innerVar = "I am from inner function";
    console.log(globalVar); // Accessing global variable
    console.log(outerVar);  // Accessing outer function's variable
    console.log(innerVar);  // Accessing inner function's own variable
  }

  innerFunction();
}

outerFunction();




    // Breakdown:
    // Global Scope:

    // globalVar ko hum global scope mein define kar rahe hain. Yeh variable sabhi scopes ke liye accessible hoga.
    // Outer Function Scope:

    // outerVar ko hum outerFunction ke andar define kar rahe hain. Yeh variable sirf outerFunction aur uske inner scopes ke liye accessible hoga.
    // Inner Function Scope:

    // innerVar ko hum innerFunction ke andar define kar rahe hain. Yeh variable sirf innerFunction ke andar accessible hoga.
    // Inner function ke andar hum globalVar, outerVar, aur innerVar sab ko access kar sakte hain kyun ke lexical scoping ke through child scopes ko parent scopes ke variables ka access hota hai.
    // Access Control:

    // Outer function ke andar aap inner function ke variables ko directly access nahi kar sakte, kyun ke wo inner scope ke andar define hote hain.
    // Summary:
    // Scope decide karta hai ki variable kis jagah se accessible hoga.
    // Child scope ko parent scope ka access hota hai, lekin parent scope ko child scope ka access nahi hota.
    // Scope hierarchical hota hai, jisme inner functions ko outer functions ke variables ka access hota hai, lekin reverse nahi hota.
    // Yeh concept aapko variable hoisting, closures, aur execution context samajhne mein madad dega!



function  varr(){
    var c = 10;
    console.log("Value of c is: " + c);
}
varr();
// console.log("c is: " + c);


{
    var str = "Hello world i am var";
    console.log(str);
}
console.log(str);

function varInFunctionScope(){
    var  strr = "Hello world i am var  variable insdide function";
    console.log(strr); //var ka scope sirf function k saath kaam kartaa hain agar function ke bahar use kary tu error hoga
    //our jab yee same var variable ko agar block scope mai declare kary tu ye bahir b access huga
}

varInFunctionScope()
// console.log(strr);// error var ka scope sirf function k saath kaam kartaa hain agar function ke bahar use kary tu error hoga


//var example woth block scope
{
    var strrr = "Hello world i am var variable insdide block scope";
    console.log(strrr);
}

console.log(`i am var varibale inside block scope i am accessing variable outside block scope ${strrr}`);
