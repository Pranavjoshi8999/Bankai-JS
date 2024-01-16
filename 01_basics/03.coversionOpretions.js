let score = "33"
let scoreOne="33abc"// NaN
let scoreTwo=null // 0
let scoreThree=undefined// NaN
let scoreFoure=true // 1 or 0

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);


// "33"=33
//"33abc"=NaN
// true =1 false=0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=true 0=false
//" "=false
// "Pranav"= true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);