const accountId = 144553
let accountEmail = "pranav@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ffstywtygwyv"
accountPassword = "233435626"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
becuse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])