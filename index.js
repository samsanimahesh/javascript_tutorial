let a = 10;
console.log(a);

var c = 10;
var c = 100;

console.log(c)

const b = 100;


function x() {
    for(var i=1;i<=5;i++) {
        setTimeout(() => console.log(i), 1000);
    }
    console.log("X is executed")
}

x();


function closureExample() {
    for(var i=1;i<=5;i++) {
        function close(i) {
            setTimeout(() => console.log(i), i*3000);
        }
        close(i);
    }
}

closureExample();


// function statement() 
function aFunction() {
    console.log("a is called");
}

// Function expression
var bFunction = function(param1, param2, param3) {
    console.log("B Function called"+param1+", "+param2+", "+param3);
}



aFunction();
bFunction(4,5, function(){console.log("first class")});



const radius = [3,2,1,4];
const output = [];

const area = function(rad) {
    return Math.PI * rad * rad;
}

const calculate = function(rad, logic) {
    for(let i=0;i< rad.length; i++) {
        output.push(logic(rad[i]));
    }

    return output;
} 

console.log("output from higher order function "+calculate(radius, area));

console.log("output from map function "+radius.map(area));

const newOutput = [];
Array.prototype.newCalculate = function(logic) {
    for(let i=0;i< this.length; i++) {
        newOutput.push(logic(this[i]));
    }

    return newOutput;
}

console.log("Prototype is "+radius.newCalculate(area));

// Map, filter and reduce

const input = [3,4,5,6,7,8]
function double(x) {
    return x * 2;
}

console.log(input.map(x => x* 2))
console.log("Filtered array "+input.filter(x => x %2 === 0 ));
console.log("Reduced array is "+input.reduce((acc, curr) => acc +curr));


const users = [
    {firstName: "Mahesh", lastName: "Babu", age: 30},
    {firstName: "Mahesh", lastName: "Babu", age: 31},
    {firstName: "Mahesh", lastName: "Babu", age: 32},
    {firstName: "Mahesh", lastName: "Babu", age: 30}
]

console.log(users.map(user => user.firstName+", "+user.lastName));
console.log(users.reduce(function(acc, curr) {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {}))

// Promises
const GITHUB_API = "https://api.github.com/users/samsanimahesh";
const response = fetch(GITHUB_API);
response.then(val => console.log("Response is "+val))

createOrder()
.then(function(orderId) {
    console.log(orderId);
    return orderId;
})
.then(function(){
    return proceedToPayment();
})
.then(function(paymentInfo) {
    console.log("Payment info is "+paymentInfo);
})
.catch(function(err) {
    console.log(err.message);
});

function createOrder() {
    const pr = new Promise(function(resolve, reject){
        const orderId = "12345"

    if(orderId) {
        setTimeout(function() {
            resolve(orderId)
        }, 5000);
    }
    })
    return pr;
    
}

function proceedToPayment() {
    return new Promise(function(resolve, reject){
        resolve("Payment successful");
    })
}

// const promiseData = new Promise(function(resolve, reject) {

//     if()
    

// })