const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2s");
        resolve(1)
    }, 2000)
})
p1.then((value) => {
    console.log(value);
    let p2 = new Promise( (resolve, reject) => {
        setTimeout(() => {resolve(2)}, 3000);
    })
    return p2;
}).then((value) => {
    console.log("we are done "+ value);
    return 3;
}).then((value) => {
    console.log("we are done third time "+value);
})