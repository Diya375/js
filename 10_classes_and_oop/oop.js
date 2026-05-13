//const user = { //object
    // username : "diya",
    // loginCount : 8,
    // signedIn : true,

    // getUserDetails: function(){
//console.log("got user details from database");
//console.log(`Username:${this.username}`);
//console.log(this);

 //   }

//}
//console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new promise()
// const date = new Date()//new keyword-constructor function - allow to create multiple instances from one object

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);//gives methods also
        
    }

  //  return this;(write or not it returns)
}
const userOne = new User("diya", 12, true)
const userTwo = new User("ankit", 24, false);
console.log(userOne.constructor);
//console.log(userTwo);


