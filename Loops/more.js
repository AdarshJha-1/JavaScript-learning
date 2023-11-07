// let coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// // console.log(values);



// const myNums = [1,2,3,4,5,6,7,89,10]

// const newNum = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNum);



// // let newNum = []
// // myNums.forEach( (num) => {
// //     if(num>4){
// //         newNum.push(num)
// //     }
// // })

// // console.log(newNum);


const books = [
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        firstPublishDate: 1955,
        currentEdition: 2003, 
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        firstPublishDate: 1960,
        currentEdition: 2013,
    },
    {
        title: "1984",
        genre: "Science Fiction",
        firstPublishDate: 1949,
        currentEdition: 2000,
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        firstPublishDate: 1937,
        currentEdition: 2023,
    },
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        firstPublishDate: 1951,
        currentEdition: 2017,
    },
    {
        title: "Pride and Prejudice",
        genre: "Classic",
        firstPublishDate: 1813,
        currentEdition: 1999,
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        genre: "Fantasy",
        firstPublishDate: 1997,
        currentEdition: 2010,
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        firstPublishDate: 1954,
        currentEdition: 2021,
    },
    {
        title: "The Da Vinci Code",
        genre: "Mystery",
        firstPublishDate: 2003,
        currentEdition: 2023,
    },
    {
        title: "The Alchemist",
        genre: "Fiction",
        firstPublishDate: 1988,
        currentEdition: 2005,
    },
];




// const userBooks = books.filter( (item) => {
//     return item.genre === "Fantasy"
// })
const userBooks = books.filter( (item) => {
    return item.firstPublishDate >= 1980 && item.genre === "Fiction"
})

console.log(userBooks);

// console.log(books.genre);