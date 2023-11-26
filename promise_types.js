const p1All = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("P1 success"), 5000);
})

const p2All = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 success"), 1000);
})

const p3All = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 success"), 2000);
})

const result = Promise.all([p1All, p2All, p3All]);

result.then(val => console.log(val));

//Promise
console.log("Failed promise*************");
const p2Fail = new Promise((resolve, reject) => {
    setTimeout(()=> reject("P2 failed"), 1000);
});

Promise.all([p1All, p2Fail, p3All])
    .then(res => console.log(res))
    .catch(ex => console.log(ex));

console.log("All settled example");
Promise.allSettled([p1All, p2Fail, p3All]).then(res => console.log(res));

console.log("Race example");
Promise.race([p1All, p2All, p3All]).then(res => console.log(res));


console.log("Promise any")
const p1Fail = new Promise((resolve, reject) => {
    setTimeout(()=> reject("P1 Error"), 3000);
});

const p3Fail = new Promise((resolve, reject) => {
    setTimeout(()=> reject("P3 Error"), 2000);
})

Promise.any([p1Fail, p2Fail, p3Fail])
    .then(res => console.log(res))
    .catch(ex => console.log(ex));