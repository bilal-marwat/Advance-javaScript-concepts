// function topic today discussion 
// defnation of function
// function is a block of code that is used to perform a particular task

// Function Definition: Functions are reusable blocks of code that perform a specific task.

//bock of code that performs a specific task, can be invoked whenever needed

//For Example hamary aik PM prime minister jab agar en ko koi kaam karnaa hu tu apne personl secutry ko call karna huga 
// agar PM Koi Metting karna chataa hu tu apny personl secutry ko call karna hoga k metting arrange     


//==============================FUNCTION DECLARATION==============================

function functionName(msg, msg2){ // paranthesis is called parameter
    console.log("This is My First Function");
    console.log("And we are learning about function");
    console.log(msg, msg2);
}
functionName("Hello World" , "Good Morning"); // this is called function call or function invocation


// function bakeCake(ingredient1, ingredient2) {
//     console.log("Mixing ingredients:", ingredient1, "and", ingredient2);
//     return "Cake is ready!";
// }

// let result = bakeCake("flour", "sugar"); // Function call
// console.log(result); // Output: Cake is ready!



function bakeCake() {
    console.log("Cake is baking...");
    return "Cake is ready!";
}

for (let i = 1; i <= 3; i++) {
    let result = bakeCake(); // Function ko loop ke andar call kar rahe hain
    console.log("Batch", i, ":", result);
}



// let number1 = parseInt(value1);
// let number2 = parseInt(value2);
// prompt is string convert to number

// function addTwoNumbers (value1 , value2){
//     let sum = value1 + value2;
//     return sum; 
// }

// let value1 = Number(prompt("Enter the first number"))
// let value2 = Number(prompt("Enter the second number"));
// let result = addTwoNumbers(value1 , value2);
// document.getElementById("demo1").innerHTML = result


function userLoggedIn(userName){
    if(!userName){
        // console.log("Please enter your name");
        
        return "Please enter your name";
    }
    return `Welcome ${userName} ! You are logged in successfully`;
}

let userName = prompt("Enter your name");
let result = userLoggedIn(userName);
console.log(result);






function sumNumber(num1, num2){
    let sum = num1 + num2;
    return sum;
}

let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));
let finalResult = sumNumber(num1 , num2);
document.getElementById("demo1").innerHTML = finalResult

if(finalResult > 10){
    document.getElementById("demo").innerHTML = "Greater than 10";
}else{
    document.getElementById("demo").innerHTML = "Less than 10";
}


// anonymous function 
const noNameFunc = function(){
    console.log("This is an anonymous function");
}
noNameFunc();