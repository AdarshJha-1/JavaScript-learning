// singleton
// Object.create


// object literals
const mySys = Symbol("key1")

const JsUser = {
    name: "Adarsh",
    age: 18,
    "fullName": "Adarsh Jha" ,
    location: "New-Delhi",
    email: "adarsh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

console.log(JsUser.age)
console.log(JsUser["email"])
console.log(JsUser["fullName"])

