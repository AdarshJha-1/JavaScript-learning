// Dates

let myDate = new Date()
myDate.toLocaleString('default',{
    weekday: "long",
    day: '2-digit',
})

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date("2023-01-14") // yyyy-mm-dd
// let myCreatedDate = new Date("01-14-2003") // mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());


let timeStamp = Date.now()
console.log(timeStamp);


