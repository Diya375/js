const name="diya"
const repoCount= 50

// console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('BlackMyth Wukong')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.includes('Myth'));
console.log(gameName.startsWith('Black'));
console.log(gameName.endsWith('Wukong'));
console.log(gameName.split(' '));
console.log(gameName.replace('BlackMyth','RedMyth'));
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(0,4);
console.log(anotherString);

const newStringOne="   Hello World   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://diya.com/diya%20subedi"
console.log (url.replace('%20','-'))
console.log(url.includes('diya'))
console.log(gameName.split('-'));