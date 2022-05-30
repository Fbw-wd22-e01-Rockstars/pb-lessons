function makeAdder(num1) {
  
    function add(num2) {
    
    //return num1 + num2;
    return function(num3){
        return num1 + num2 + num3
    }
    
    };
    
    return add;
    
    }

 const addTen = makeAdder(10);
 const addSeven  = addTen(7);
 
 console.log(addSeven(3));
 