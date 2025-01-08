// this is real example about function with object and array

// this is example shoppngCart in ecommerce website you dont know how much argument pass in function user just click item add to cart button some item price 1000 and 2000 and 3000 and you have to add all item price and you have to show total price in cart button


// this example we use rest operator to pass multiple argument
function addToCartItmes(...prices){
    return prices 
}


let checkPrice = addToCartItmes(100, 450, 280, 150, 670, 390)
console.log(checkPrice);


//object example with function pass to function and use
const userName = {
    name : "Muhammad Bilal",
    age : 22,
    city : "Lahore",
    country : "Pakistan"
}

function userInfo(user){ // inside function values pass is called parameter
    console.log(`Name : ${user.name} , Age : ${user.age} , City : ${user.city} , Country : ${user.country}`);
    
}
userInfo(userName);



//direct pass obect to function
function userInfo2(user){
    console.log(`Name : ${user.name} , Age : ${user.age} , City : ${user.city} , Country : ${user.country}`);
    
}
userInfo2({
    name : "Muhammad Faisal",
    age : 18,
    city : "Darra Pezu",
    country : "Pakistan"
});


//array example with arrays

const arr = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function printArray(arr){
    console.log(arr[5]);
}

printArray(arr)