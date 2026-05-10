const user={
    username:"diya",
    price:100,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sudip"
// user.welcomeMessage()

// console.log( this);

// function coffee(){
//     let username="diya"
//     console.log(this.username);
// }
// coffee()

// const coffee=function(){
//     let username="diya"
//     console.log(this.username);
// }

const coffee= ()=>{
    let username="diya"
    // console.log(this );//arrow function does not have its own this it takes this from its parent scope which is global scope and in global scope this is window object and window.username is undefined
}
// coffee()

//  const addTwo=(num1, num2)=>   num1 +num2
// const addTwo=(num1, num2)=>   (num1 +num2) //inside curly braces we have to use return keyword. under paranthesis we can directly return the value without using return keyword and curly braces. also called implicit return

// const addTwo=(num1, num2)=>{
//     return num1+num2// using return means explicit return and we have to use curly braces
// }
 const addTwo=(num1, num2)=> ({username:"diya" })// if we want to return an object we have to wrap it in paranthesis otherwise it will be treated as a block of code and we will get undefined
 console.log(addTwo(3,4))

//  const myArray = [2,5,3,7,8]
//  myArray.forEach()

