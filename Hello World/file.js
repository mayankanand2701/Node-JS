const fs=require("fs");

// To Write the File 

// Synchronous Call
// to crate a file name test.txt in the current working dir and write the content in it provided int the below line
// fs.writeFileSync("./test.txt","Hello There.I am learning File Handling in Nodes JS");

// Asynchronous Call
// fs.writeFile("./test.txt","Hello There.",(err)=>{});

// To Read the File

// Synchronous Call
// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// Asynchronous Call 
// it does not return 
// const result=fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err)console.log("Error ",err);
//     else console.log(result);
// });

// To append to the file
// fs.appendFileSync("./contacts.txt","\nHey There");

// To create a copy of the file created
// fs.cpSync("./contacts.txt","./copy.txt");

// To delte a particular file
// fs.unlinkSync("./copy.txt");

// To get the statistics of the particular file
// console.log(fs.statSync("./contacts.txt"));

// to create a directory
// fs.mkdirSync("my-dir");