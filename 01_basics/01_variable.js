const accountId = 123456
let accountEmail = "rutuja@google.com"
var accountPassword = "123456"
accountCity = "Shirpur"

//accountId = 2// not allowed



accountEmail = "hc@dc,com"
accountPassword = "200000"
accountCity = "snk"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])