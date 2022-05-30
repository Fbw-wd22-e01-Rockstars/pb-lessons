let a = 1; // global scope

const someFunction = (number)=> {
   
  const otherFunction = (input)=>  a
    
  
  a = 5;
  
  
  return otherFunction;
}

const firstResult = someFunction(9);
const result = firstResult(2);
console.log(result);