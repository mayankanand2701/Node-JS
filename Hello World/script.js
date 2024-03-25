// we need to import the module require is the method for it
const math=require("./math.js");

// ./ means in the current directory 
// if it is not specified it will search in the machine for the code

// assume that in the math.js file you have not exported the add function and without exporting you are importing 
// the method if if then the below command is run 
// console.log(math);
// it will give output : {}

// now if you add module.exports="Mayank"; inside the math.js and the run the below command 
// console.log(math);
// The output is : Mayank

// now if you add this command inside script.js module.exports=add; and then run the below command 
// console.log(math(2,5));
// The output is : 7

// Aproach 1
// to use more than one method that is exported 
// console.log("Additon is ",math.add(5,2));
// console.log("Subtraction is ",math.sub(5,2));
// Output : 
// Additon is  7
// Subtraction is  3

// Approach 2
// Using the arrow function
console.log("Additon is ",math.add(5,2));
console.log("Subtraction is ",math.sub(5,2));
// Output : 
// Additon is  7
// Subtraction is  3
