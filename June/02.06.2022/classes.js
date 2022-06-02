class Human{
    constructor(name){
     this.name = name;
    }     
    talk(){
        return this.name+" talking....";
    }
}

class Superman extends Human  {     
    fly(){
        return "flying...";
    }
}

const me = new Human("Lara");
console.log(me.talk());
//console.log(me.fly()); not exist 

const you = new Superman("Max");
console.log(you.fly());
console.log(you.talk());
console.log( "human class instance",me);
console.log( "superman class instance",you);
