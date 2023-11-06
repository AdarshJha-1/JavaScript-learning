// const user = {
//     username: "ADdrsh",
//     fee: 199,
//     welcomMassage: function() {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomMassage()

// user.username = "adad"
// user.welcomMassage()

// console.log(this);


// function chai() {
//     let username = "ada"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "aad"
//     console.log(this.username);
// }
// chai()


// const chai = () => {
//     let username = "aad"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Adarsh"})



console.log(addTwo(2,4));