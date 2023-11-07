const myNumber = [1,2,3,4,5,6,7,89,10]

// const newNum = myNumber.map( (num) => num+10)

let newNum = myNumber
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >=30)

console.log(newNum);