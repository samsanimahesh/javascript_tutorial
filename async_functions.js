const testPromise = new Promise(function(resolve, reject){
    setTimeout(() => resolve("Promise succesful"), 5000);
    // resolve("Promise succesful");
});

const testPromise2 = new Promise(function(resolve, reject){
    setTimeout(() => resolve("Second Promise succesful"), 10000);
    // resolve("Promise succesful");
});

async function getData() {
    return testPromise;
}

async function getSecondPromise() {
    return testPromise2;
}

const data = getData();
data.then((val) => console.log(val));

async function fetchGithubData(){
    const fetchResult = await fetch("https://api.github.com/users/samsanimahesh");
    if (fetchResult.status === 200) {
        const jsonValue = await fetchResult.json();

        console.log(jsonValue)
    }
}


// Async  and await
async function resolvePromise() {
    const val = await getData();
    console.log("Inside promise: "+val);

    // console.log("Hi this is second resolution")
    // const val2 = await getData();
    // console.log(val2);

    const val3 = await getSecondPromise();
    console.log("Inside promise: "+val3)

}
fetchGithubData();
resolvePromise();