// const array1=[1, 2, 3, 4, 5]

// const initialValue=0
// const  sumwithinitial=array1.reduce((accumulator, currentvalue)=>(accumulator+currentvalue)
// );
// console.log(sumwithinitial);

const myNums=[1, 2, 3, 4]

// const newNums=myNums.reduce(function(acc, currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval

// }, 0)

const newNums =myNums.reduce((acc,curr)=>(acc+curr), 0)

console.log(newNums);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"py course",
        price:12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(priceToPay);

