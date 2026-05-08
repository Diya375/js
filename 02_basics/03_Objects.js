// Singleton
//object.create
//object literals

const mySym = Symbol("key1")
const JsUser={
    name: "Diya",
    "full name": "Diya Subedi",
    [mySym]:"mykey1",
    age: 18,
    email: "admin@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]

    
}
// console.log(JsUser.email)
// console.log(JsUser["email"])//can also write
// console.log(JsUser["full name"])
// console.log(JsUser. name)
// console.log(JsUser.age)
// console.log(JsUser.isLoggedIn)
// console.log(JsUser.lastLoginDays)
// console.log(JsUser.mySym)

 JsUser.email="Diya@chatgpt.com"
// Object.freeze(JsUser)
 JsUser.email="diya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User")
}
    JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


