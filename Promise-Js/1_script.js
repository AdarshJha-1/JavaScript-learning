// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task

//     setTimeout(function(){
//         console.log("async task is complete");
//         resolve();
//     }, 1000)
// });

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// const promiseTwo = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("async task 2 is complete");
//         resolve();
//     }, 1000)
// });

// promiseTwo.then(function(){
//     console.log("Promise 2 consumed");
// })


// const promiseThree = new Promise(function(resolve, reject){
//     const a = 10, b = 20;
//     let sum;
//     setTimeout(function(){
//         console.log("async task 2 is complete");
//         resolve(sum = a + b);
//     }, 1000)
//     return sum
// });

// promiseThree.then(function(sum){
//     console.log("Promise 3 consumed");
//     console.log(sum);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         const a =100, b=120;
//         let error = true;
//         if(!error){
//             console.log("async task 2 is complete");
//             resolve(a+b);
//         }
//         else{
//             console.log("Can't add");
//             reject("ERROR")
//         }
        
//     }, 1000)
// });

// promiseFour.then(function(sum){
//     console.log("Promise 4 consumed");
//     console.log(sum);
// })

// const promise = new Promise(function(resolve, reject){
//     console.log("Promise is pending....");
//     setTimeout(() =>{
//         let a=10, b =10, sum;
//         sum = a +b;
//         resolve(sum);
//     }, 5000)
// })

const promise1 = new Promise(function(resolve, reject){
    console.log("Promise is pending....");
    
    setTimeout(() =>{
        let a=10, b =10, sum;
        sum = a +b
        if(sum == (a+b)){
            resolve(sum);
        }else{
            reject(new Error("ERROR HERE IN P2"));
        }
        
    }, 5000)
})

// promise.then((value) => {
//     console.log(`The sum is: ${value}`);
// })

promise1.then((sum) =>{
    console.log(`The sum is: ${sum}`);
},(error) => {
    console.log(`ERROR: ${error}`);
})


// promise1.then((sum) =>{
//     console.log(`The sum is: ${sum}`);
// }).catch((error) => {
//     console.log(`ERROR: ${error}`);
// })

// console.log(promise);