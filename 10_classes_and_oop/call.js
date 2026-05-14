function SetUsername(username){
//complex DB calls
this.username = username
console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)//not called
    //to call explicitely
    
    this.email = email,
    this.password= password
}
//call passes current execution process to another fxn....
const coffee = new createUser("coffee", "coffee@google.com", "123")
console.log(coffee);