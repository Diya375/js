// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log(2>1);//true
console.log(null==0);//false
console.log(null>=0);//true
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

//The reason is that an equality check == and comparisons >< >= <= works differently
//comparison converts null to number, testing it as 0.
//That's why (3)>=0 is true and (1) null>0 is false.

//===
console.log("2"===2);



