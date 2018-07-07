const getFirstName = name=> name.split(" ")[0].trim();
console.log(getFirstName("Ravi Singh"));
console.log(getFirstName("Andrew Mead"));

const multiplier = {
    numbers :[1,2,3],
    multiplyBy :2,
    multiply(){
        return this.numbers.map(num => num*this.multiplyBy);
    }
};

console.log(multiplier.multiply());


