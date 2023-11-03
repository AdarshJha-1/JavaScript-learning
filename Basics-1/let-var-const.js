const accountId = 144223 //const --> stored value always remain same.

let accountEmail = "adarsh123@gmail.com" // let --> mostly used now, stored value can be change. 

var accountPassword = "12345" //var --> not used now as much because the problem of scope 

accountCity = "Delhi" // in Js we can declare a variable without mentioning let, var or const but not prefer 

let accountState // declared variable without any value assigned in it is undefined default 

/*
Prefer not to use var
because problem of scope in var
*/

// accountId = 2 not allowed
accountEmail = "asta@gmail.com"
accountPassword = "122345345"
accountCity = "Bihar"

console.log(accountId); // printing function
console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // printing function which print in table formate