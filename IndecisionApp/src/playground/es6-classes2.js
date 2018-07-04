class Person {
    constructor(){
        this.stomach = [];
    }
    eat(food){
        this.stomach.push(food);
    }
    showStomach(){
        console.log(this.stomach);
    }
}


class Student extends Person {

}

class Employee extends Person {

}

let p = new Student();
p.eat("apple");
p.eat("mango");
p.showStomach();


let e = new Employee();
e.eat('Burger');
e.eat('Pizza');
e.showStomach();