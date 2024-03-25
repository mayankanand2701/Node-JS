// function add(a,b)
// {
//     return a+b;
// }
// function sub(a,b)
// {
//     return a-b;
// }
// this function is private thus you need to export in order to visible to the code where it is imported 

// module.exports="Mayank";
// module.exports=add;

// Aproach 1
// to export more than one methods
// module.exports={
//     add,
//     sub,
// }

// Approach 2
// Multiple Export create arrow function for both addtition and subtraction
exports.add=(a,b)=>a+b;
exports.sub=(a,b)=>a-b;