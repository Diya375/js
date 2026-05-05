const accountId =14415
let accountEmail= "diya@google.com"
var accountpassword="12345"
accountCity="Bhojad"
let accountstate;

// account_Id =2 not allowed
console.log(accountId);

/*
Prefer not to use var because of block scope and functional scope
*/


accountEmail="dytech@gmail.com"
accountpassword="1111"
accountCity="Chitwan"
console.log(accountId);
console.table([accountId, accountEmail, accountpassword, accountCity, accountstate]);
