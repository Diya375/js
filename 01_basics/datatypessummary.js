// Primitive


// 7 types : String, Number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue= 100.3

const isloggedIn=false
const outsideTemp=null
let userEmail;//gives undefined

const id = Symbol ('123')
const anotherId= Symbol('123') //id, anothweId gives symbol

console.log(id===anotherId);

const bigNumber= null //null gives object
const heros= ["Shaktiman", "Naagaraj","Doga"]
let myObj={
    name:"hitesh",
    age:22,
}

const myFunction = function(){ //myFunction gives Function
    console.log("Hello world");
}
console.log(typeof   userEmail );

//Reference (non primitive)

// array, Objects, Functions