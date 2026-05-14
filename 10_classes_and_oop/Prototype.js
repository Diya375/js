// let myName = "Diya     "
// let myChannel = "coffee     "
// console.log(myName.truelength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.diya = function(){
    console.log(`diya is present in all objects`);

}

Array.prototype.heyDiya = function(){
    console.log(`"diya says hello`);
}

//heroPower.diya()
// myHeros.diya()
// myHeros.heyDiya()
// heroPower.heyDiya()  no access of heyDiya

//inheritance

const User={
    name:"coffee",
    email:"coffee@gmail.com"
}

const Teacher ={
    makeVideo : true
}
const TeachingSupport={
    isAvailable: false
}
const TASupport = {
    makeAssignment :'JS assignment',
    fullTime: true,

    __proto__: TeachingSupport
}

Teacher.__proto__= User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Coffeewithdiya     "

String.prototype.trueLength = function(){
    //console.log(`${this}`);
   // console.log(`{this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"diya".trueLength()
"iceTea".trueLength()