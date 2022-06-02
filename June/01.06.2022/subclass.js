// parent class 
class Person{
    constructor(name, address,occupation){
        this.name = name;
        this.address = address;
        this.occupation = occupation;
    }
    greet(){
        console.log(`Good Morning ${this.name}!`);
    }

}
// sub class 
// student Card ID
class Student extends Person {
    constructor(name,address,studentID){
        super(name,address);
        this.studentID = studentID;
        // override property 
        //this.address ="Hamburg";

    }
    // override method greet (optional)
    greet(){
        console.log(`Hello Student ${this.name}`);
        console.log(`Welcome to your campus in ${this.address}`);
    }
}
const person = new Person("Max","Berlin","frontend web developer");
const student = new Student("Sara","Duisburg","Q1234");
console.log(person)
console.log(student);
person.greet();
student.greet();