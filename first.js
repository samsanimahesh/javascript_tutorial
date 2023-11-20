console.log("Hello java script !!!")

let userName = "Mahesh"
let lastName = "Babu \"Samsani\""

console.log(userName +" "+ lastName)
console.log( typeof userName);

let test = {
    name: "mahesh",
    exp: "11 years",
    laptop: {
        name: "dell",
        make1: "2011"
    }
}

console.log(`name is ${test.exp}`)
console.log(`name is ${test.laptop?.make?.length}`)
console.log(test)


for (let key in test) {
    console.log(`Key is ${key} and value is ${test[key]}`)
}

let add = function(num1, num2) {
    return num1+num2;
}

console.log(add(5, 6))


let greet = (num1, num2) => {
    console.log("Hello world");
    return num1+num2;
}

console.log("arrow function output "+greet(5,6))



let laptop = {
    cpu: "intel i7",
    ram: "8gb",
    brand: "HP",

    getConfig: function() {
        console.log(this.cpu)
    }
}

laptop.getConfig()


let values = new Array(); // or []
values.push(5);
values.push(6);
values.push(7);
values.push(8);
values.push(9);
console.log("Array values are "+ values +" and lenght is "+values.length)

for (let index = 0; index < values.length; index++) {
    const element = values[index];
    console.log("Elements are "+element)
}

let multipleTypes = ['Navin', 5, {tech: "JS"}, function() { console.log("Function in array"); }]
console.log("Multiple data types are "+multipleTypes[3]())

console.log("shifted values "+values.unshift(2))

console.log("Array after shifting "+values)

for(let key in values) {
    console.log("Key is "+key +" value is "+values[key])
}

let words = "My name is Mahesh".split(' ');
console.log(words)


let nums = [1,2,3,4,5,6,7,8]

nums.forEach(n => {
    console.log(n)
})

nums.filter(n => n%2 === 0).flatMap(n => n*n).forEach(n => console.log("number is "+n))

let result = nums.reduce((a,b) => a+b)
console.log("Result is "+result)

console.log("Set examplesss...")
let setValues = new Set();
setValues.add(3);
setValues.add(4);
setValues.add(5);

console.log(setValues)

setValues.forEach(n => console.log("set vaue is "+n))

let map = new Map();
map.set("key", "value");
map.set("test", "test");

console.log("map values are "+map.get("key"));








class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Name is "+this.name +" age is "+this.age);
    }
}

let person = new Person("Mahesh", "30");
person.greet();

