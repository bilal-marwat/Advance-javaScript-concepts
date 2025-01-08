// Function return Ka Basic Concept:

// Jab ek function execute hota hai, to wo kaam karta hai jo uske andar likha hota hai. return statement ka kaam hota hai result ko function se bahar bhejna. Iska matlab hai, function apna kaam karne ke baad jo result de raha hai, wo return statement ke zariye bahar use milta hai.



//======================================= 1. Without return:

// Agar function ke andar koi return statement nahi hoti, to function sirf apna kaam karta hai, lekin result ko bahar nahi bhejta.

//EXAMPLE 1: without return statement:

function addNumbers(a, b) {
    let sum = a + b;
    console.log(sum); // Sirf sum ko console pe dikhayega
}

addNumbers(5, 3); // Output: 8

//Is example mein, function sirf console pe result show karta hai, lekin agar tumko yeh result function ke bahar chahiye, to return ka use karna padega.



//======================================= 2. With return statement:

// Jab function me return statement hoti hai, to wo result ko function ke bahar le aata hai, aur tum us result ko kisi variable me store kar sakte ho ya doosre kaam ke liye use kar sakte ho.

//EXAMPLE 2: with return statement:
let a = 2;
let b = 3;

function multiplyNumbers(a, b) {
    let calculation = a * b;
    return calculation;
}


let result = multiplyNumbers(a, b);
console.log(result);

if(result > 10){
    console.log("Greater than 10");
}else{
    console.log("Less than 10");
}

// es example mai return calculation ka matlab hain k calulcation ko function sy bahir bhejo taki usko kisi aur jagah use kiya ja sake.



// return Ka Purpose:
// Result ko bahar le jana: Tum return ka use isliye karte ho taki function ka result kisi aur kaam me use ho sake.
// Execution ko stop karna: Jab return statement execute hoti hai, to function usi waqt stop ho jata hai. Uske baad ka koi code execute nahi hota.


function checkNumber(num) {
    if (num > 0) {
        return "Positive"; // Yeh return hone ke baad function yahin stop ho jata hai
    }
    return "Negative";
}

console.log(checkNumber(5));  // Output: "Positive"
console.log(checkNumber(-3)); // Output: "Negative"


function changeValue(x) {
     x = 10;  // function ke andar x ki value ko 10 bana rahe hain
     console.log(x);
     
  }
  
  let num = 5;  // num ki value abhi 5 hai
  changeValue(num);  // function ko num pass kiya
  console.log(num);  // Output: 5
  


  function myExampleFunction(checkArgument) {
    return checkArgument = 10;
    // console.log("Number is", checkArgument); /

  }
let number = 20;
let checkParamResult = myExampleFunction(number);
console.log(`checkParamResult : ${checkParamResult}`);
console.log("Number is", number);


// jab hum function primitive ko pass krengy tu pass bya value huta hain matlab function ko copy milta hain agar hum us value ko 
// change kary tu sirf us function k andar change huga naaa k asli value ko change kary gain
// primitive data types like number, string, boolean, undefined, null, symbol, bigint, etc. are immutable in JavaScript.


function stringExample(str) {
     return str = "Hello";
    // console.log(str);
  }
  
  let myString = "World";
  let strResult = stringExample(myString);
  console.log(`string Result : ${strResult}`);
  console.log(myString);


console.log("===========================EXAMPLES OF NON PRIMITIVE DATA TYPES===========================");

  // non primitive data types like objects, arrays, functions, etc. are mutable in JavaScript.
  function object(comeObject){
    return comeObject.name = "Muhammad Faisal Marwat";
  }

  const user1 = {
    name : "Muhammad Bilal Marwat",
    age : 20,
    designation: "Web Developer",
    country : "Pakistan KPK"
  }
  
  console.log(user1.name);

let finalResultObject = object(user1);
console.log(finalResultObject);


// array example 

function arrayExample(arr){
    
}
 
  
  