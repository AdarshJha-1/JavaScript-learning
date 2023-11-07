let coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach(element => {
//     console.log(element);
// });

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(value){
//     console.log(value);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

let myCode  = [
    {
        langName: "JavaScript",
        langFile: "js"
    },
    {
        langName: "Java",
        langFile: "java"
    },
    {
        langName: "Python",
        langFile: "py"
    },
]

myCode.forEach( (item) => {
    console.log(item.langName);
})