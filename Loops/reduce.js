const arr = [1,2,3,4,5,6,7,8,9]

let init =0
const myTotal = arr.reduce( (acc, currVal) =>
    (console.log(`acc: ${acc} & currval: ${currVal}`),
    acc + currVal),
    0)
console.log(myTotal);