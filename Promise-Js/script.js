// const promiseOne = new Promise((resolve, reject) => {
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(() => {
//         console.log("Async task completed");
//         resolve();
//     }, 1000)
// });

// promiseOne.then(() => {
//     console.log("Promise consumed");
// });

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async task 2 completed");
//         resolve();
//     },1000)
// }).then(() => {
//     console.log("Async 2 resolve");
// })


// const p_three = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Task 3 completed");
//         resolve({username: "Adarsh", email: "adarsh@gmail.com"});
//     }, 2000)
// })

// p_three.then((user) => {
//     console.log(user);
// })

// const p_four= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // let error = false;
//         let error = true;
//         if (!error) {
//             resolve({username: "Adarsh", password: "000000"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 2000)
// })

// p_four
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("Resolve ? Rejected?");
// })
// // console.log(username);



// const p_five= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // let error = false;
//         let error = true;
//         if (!error) {
//             resolve({username: "Javascript", password: "000000"})
//         }else{
//             reject('ERROR: Js went wrong')
//         }
//     }, 2000)
// })


// async function p_five_con(){
//     try {
//         const response = await p_five
//         console.log(response);
//     } catch (error) {
//         console.log("ERROR");
//     }
// }

// p_five_con();


// async function getData(){
//     try {
//         const response = await fetch('https://animechan.xyz/api/random');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR");
//     }
// }

// getData();


fetch('https://animechan.xyz/api/random')
.then((data) => {
    return data.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {console.log("ERROR");})