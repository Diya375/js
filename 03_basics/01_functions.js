// console.log("D")
// console.log("I")
// console.log("Y")
// console.log("A")
 
function sayMyName(){
    // console.log("D");
    // console.log("I");
    // console.log("Y");
    // console.log("A");
}
// sayMyName()  //() is used to call the function

// function addTwoNumbers(num1, num2){
// console.log( num1+num2);
// }
// addTwoNumbers(4,"5") // 45 under the "" means string so gives 45 as output but if we remove "" then it will give 9 as output because it will consider both as number.

// addTwoNumbers(3,null) 

function addTwoNumbers(num1, num2){
 let result= num1+num2
 return result
//  console.log("Diya") does not execute because we have already returned the value so it will not execute any code after return statement
}

const result = addTwoNumbers(3,5) //undefined because we are not returning anything from the function so it gives undefined as output
// console.log("Result: ", result);


// function addTwoNumbers(num1, num2){{
//     return num1+num2
// }

// const result1= addTwoNumbers(4,5)
// console.log("Result: ", result1);


function loginuserMessage(username="sam"){
    if(!username ){  //same as (username===undefined)
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("Diya"));
//console.log(loginuserMessage());//sam just logged in because we have provided a default value for the parameter.donot provide null as we already have a default value for the parameter  

function calculatrCartPrice(val1, val2,...num1){//gives all the arguments in an array but only num1 gives 200
    return num1
}
// console.log(calculatrCartPrice(200, 300, 400, 500, 3000))

const user= {
    username: "Diya",
    course: "JavaScript",
    isLoggedIn: true,
}
function handleObejct(anyobj){
    // console.log(`Username is ${anyobj.username} and course is ${anyobj.course}`);

}
// handleObejct(user)
handleObejct({
    username: "sudip",
    course: "Python",
})

const myNewArray= [200, 400, 100, 600]

 function returnSecondValue(getArray){
    return getArray[0]
 }
// console.log(returnSecondValue(getArray)){
//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue( [100, 300, 500]));