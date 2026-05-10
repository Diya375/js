//  var c=300
//scope is whatever inside the curly braces
let a=300

if (true){
   let a=10
    const b=20
    //  console.log("INNER: ", a);
//   var c=30 // var is function scoped and it can be accessed outside the block but let and const are block scoped and they cannot be accessed outside the block and is same ad c=30
}
// const array = [1, 2, 3, 4, 5];

// for (let i=0; i < array.length; i++){
//     const element = array[i];
//     console.log(element);
// }



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="diya"

    function two(){
        const website="youtube"
        console.log(username);
 
    }
    // console.log(website);
    
    two()

}
// one()

if(true){
    const username= "diya"
    if(username=== "diya"){
        const website=" youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//++++++++++++++++interesting+++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}


addTwo(5)//cannot use declaration before initialization
const addTwo = function(num){
    return num+2
}
