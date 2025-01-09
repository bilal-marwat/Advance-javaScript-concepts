// How nested scope working in javascript?
// Nested Scope is a scope inside a scope, which is a scope inside a scope, and so on.

function outerFunction(){
    let outerVar = "I am from outer function i am accessible in inner function";
    

    //first inner function inside outer function
    function innerFunction(){
        let innerVar = "I am from inner function";
        console.log(outerVar);
        console.log(innerVar);
         
        
    }

    //second inner function inside outer function
    function innerFunction2(){
        let innerVar2 = "I am from inner function 2"; 
       console.log(outerVar);
       console.log(innerVar2);
       
       
    }

    innerFunction();
    innerFunction2();
}

outerFunction();


if(true){
    const str = "Muhammad Bilal";
    if(str === "Muhammad Bilal"){
        const designation = "Web Developer";
        console.log(str + " " + designation);
    }
    // console.log(designation); // Error : designation is not defined beacause it is declared inside if block and you try to access it outside
    
}
//console.log(str);  // Error : str is not defined beacause it is declared inside if block and you try to access it outside 



//==============================INTERSTING PART AND IMPORTANT======================================================================
console.log("=====================================INTERSTING PART AND IMPORTANT===============================================");

console.log(addOne(5));
 // if you call this function before declaring it you will get give result no error
function addOne(num){
    return num + 1;
}
// console.log(addOne(5));


console.log(addTwo(5)); // if you call this function before declartion error hoga

const addTwo = function(num){ // second way to declare function some time say to this function function expression
    return num + 2;
}
// console.log(addTwo(5));


