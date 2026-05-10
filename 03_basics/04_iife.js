//Immediately Invoked Function Expression(IIFE) 

(function coffee(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();


(( name) => {//if written function name it will give error
    console.log(`DB CONNECTED TWO ${name}`);
})(`diya`);

(function diya(){
    console.log(`DB CONNECTED THREE`);
})()