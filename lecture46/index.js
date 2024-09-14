
console.log(marks);
console.log("babbar");
console.log("Love");    //line 1,2,3,4, comes under temporal dead zone since value of marks cantbe accessed over here
const marks = 100;
console.log(marks);



// {
//     const age = 100;
// }

// console.log(age);                //global var can be accessed anywhere any fun or amy scope


// console.log(height);
// {
//     var height = 180;               //var is not block scope if declared inside a block can be accessed outside a block but this not true for comst and let
// }

// console.log(height);


// console.log(fullName);
// function sayHello() {
//     const fullName = "Earth";
//     console.log("Hello Dunia ", name);
// }
// console.log(fullName);
// sayHello();





// //global scope
// const age = 15;

// console.log(age);

// {
//     console.log(age)
// }
// if(true ){
//     console.log(age)
// }
// for(let i=0; i<2; i++) {
//     console.log(age);
// }

// function sayHello() {
//     console.log("hi ", age);
// }
// sayHello();








