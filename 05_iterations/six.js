//const coding = ["js","ruby", "java","python","cpp"]

//const values =coding.forEach( (item)=>{
  //console.log(item);
//})
//console.log(values);

//foreach doesn't return any values

const myNums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums=myNums.filter((num)=>{//inside scope return should be written
 //return  num>4
//})

// const newNums=[]

// myNums.forEach((num)=>{
//     if(num>4){
//        newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title:'Book one',genre:'fiction',publish:1981, edition:2004},

    {title:'Book two',genre:'non-fiction',publish:2002, edition:2005},

    {title:'Book three',       genre:'History',publish:2003, edition:2006},

    {title:'Book four',genre:'History',publish:1982, edition:2001},
];

let userBooks=books.filter((bk)=>bk.genre==='History')
userBooks = books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre==="History"}) 

console.log(userBooks);
