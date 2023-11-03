// const name = "adarsh"
// const repoCount = 10;

// console.log(name + repoCount + " value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("AdaRsh")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('R'))

const newString = gameName.substring(0,4)
console.log(newString);

const more = gameName.slice(-8, 3)
console.log(more);

const more1 = "     Ada   "
console.log(more1)
console.log(more1.trim())


const url = "https://www.google./com"
// console.log(url)
// console.log(url.replace('./', '.'))
// console.log(url.includes('ww1w'))

console.log(url.split("."));
console.log(url.blink());