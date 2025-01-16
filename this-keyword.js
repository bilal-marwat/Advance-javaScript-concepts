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
    let userName = "Muhammad Bilal";
    console.log(this.userName);
}
greet();


//function expression

const greetExp = function () {
    let userName = "Muhammad Bilal";
    console.log(this.userName);
}
greetExp();


//arrow function
const greetArrow = () => {
    let userName = "Muhammad Bilal";
    console.log(this.userName);
}
greetArrow();
