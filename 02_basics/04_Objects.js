// const tinder = new Object()
const tinderUser = {}

  tinderUser.id = "123abc"
  tinderUser.name = "Ankit"
  tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname: {
            firstname:"Diya",
            lastname:"Subedi"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3={obj1, obj2}
const obj3 =  {...obj1, ...obj2}
console.log(obj3)


// const i1={1:"34", 2:"44"}
// const i2={3:"56", 4:"78"}

// const i3 =Object.assign({}, i1, i2)

// const target=  {1:"34", 2:"44"}
// const source= {3:"56", 4:"78"}

// const returnedTarget=Object.assign({},target,source)
// console.log(returnedTarget);

const users=[
    {
        id:1,
        email: "d@gmail.com"
    },
    {
        id:2,
        email: "c@gmail.com"
    },
    {
       id:3,
        email: "f@gmail.com"
    },
]
 users[1].email
 console.log( users);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//keys and values both
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

