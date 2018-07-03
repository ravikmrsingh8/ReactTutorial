class Person {

    // Constructor overloading not allowed
    // constructor(name){
    //     this.name = name;
    // }

    constructor(name="Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hi I am ${this.name}`;
    }

    description(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}



class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    description(){
        return super.description() + (this.hasMajor ?`,major in ${this.major}` : ''); 
    }
}


class Traveller extends Person {
    constructor(name, age, home){
        super(name, age);
        this.home = home;
    }

    greet(){
        let greetText = super.greet();
        if(this.home) greetText += `I am travelling from ${this.home}`;
        return greetText;
    }

}
const person1 = new Student("Andrew Mead", 26, 'CSE');
console.log(person1.description());


const person2 = new Person("Ravi Singh", 28);
console.log(person2.description());


const person3 = new Traveller("Discovery guy", 36, "Philadelphia");
console.log(person3.greet())


const person4 = new Traveller("Ravi", 28, "");
console.log(person4.greet())


console.log("\n\nSome garbage things that JavaScript could do")
person1.greet = function(){
    return `Hmm !`;
}
console.log(person1.greet());
