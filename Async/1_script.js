
// console.log("My name is ");

// setTimeout(() => {
//     console.log("Adarsh"); // print after delay of 1 sec. (1000ms)
// }, 1000);

// setInterval(() => {
//     // console.log(" -_- "); // print after every 5 sec. (like loop)
// },5000)

// console.log(" Jha");

// setTimeout(() => {
//     document.querySelector('h1').innerHTML = "Looking to become a front-end web developer?"
//     }, 1000);

// or

const changeH1 = () => {
    document.querySelector('h1').innerHTML = "Looking to become a front-end web developer?";
}

const changeText = setTimeout(changeH1, 2000);


const stop = document.querySelector('#stop').addEventListener('click', () => {
    console.log("clicked on stop");
    clearTimeout(changeText);
})

