// setInterval(() => {
//     console.log("Print");
// },2000)


const changeBGColor = () => {
    let color = "#";
    let hex = "0123456789ABCDEF"
    
    for(let i = 0; i < 6; i++){
        let randNum = Math.floor(Math.random() * 16 );
        color += hex[randNum];
    }
    return color;
}
let text = animal_names = ["lion", "elephant", "giraffe", "zebra", "kangaroo", "penguin", "tiger", "koala", "monkey", "cheetah"];
let index = 0;
let interval; 

const changeTextOnScreen = () => {
    document.querySelector('p').innerHTML = `The new animal name is : ${animal_names[index]}`
    document.querySelector('body').style.backgroundColor = changeBGColor();
    console.log(index);
    console.log(changeBGColor());
    index++;
}



const start = document.querySelector('#start').addEventListener('click', () =>{0
    interval = setInterval(changeTextOnScreen, 3000);
})

const stop = document.querySelector('#stop').addEventListener('click', () =>{0
    clearInterval(interval);
    interval = null;
    index = 0;
})

