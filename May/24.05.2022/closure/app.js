function greetUser(){
    let name = "Mara";

   return function greet(name){
        console.log("Hello "+name);
    }
}
let greet = greetUser();
greet("Max"); // calling the inner function
greet("Lana");
greet("Mara")
//////////////////////////////////

function counter(){
    let c = 0;
    return function(){
        return c++
    }
}
const counting = counter(); // call the outer function one time 
console.log(counting());
console.log(counting());
console.log(counting());
console.log(counting());

///////////////////////
// function sayHello(){
//     return  function(){
//         return "Hello World from inner function"
//     }
// }
// const hello =sayHello();
// console.log(hello());
// console.log(hello());

function addNumber(num1){
    return function(num2){
        return num1 + num2
    }

}
const add = addNumber(4); // executed once 
console.log(add(6));
console.log(add(1));

const addnumbers = addNumber(100);
console.log(addnumbers(200));

///////////////////////
function makeTitle(x){
    function title(y){
       return `${x} ${y}`;
    }
    return title
}

console.log(makeTitle("Mr")("David"));
console.log(makeTitle("Ms")("Anna"));
