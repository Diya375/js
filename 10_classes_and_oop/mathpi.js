const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);


// console.log(Math.PI);  cannot be changed
// Math.PI=5
// console.log(Math.PI);


// const mynewObject =Object.create(null)

const coffee = {
    name:'americano',
    price: 250,
    isAvailable: true,


    ordercoffee: function(){
        console.log("coffee is not made");
    }
}
console.log( Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperty(coffee, 'name', {
    //writable: false,
    enumerable:true,
})
console.log( Object.getOwnPropertyDescriptor(coffee, "name"));

for (const [key,value] of Object.entries(coffee)) {
  console.log(`${key}: ${value}`) ; 
}

for (const [key, value] of Object.entries(coffee)) {
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
