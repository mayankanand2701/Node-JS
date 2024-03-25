// Nodes JS Architecture

// The flow starts with the client(user).
// This Client make request to the server which is made up of Node JS
// Request comes to the server
// All the request are queued under Event Queue
// Event Loop always keep eye on our Event Queue , if there is any request under the event loop (it works on FIFO 
// principle ) , it picks the request one by one and remove form the Event Queue.
// When we pick the request from the Event Queue and check for which type of request it is :
// i. Blocking Request/Operations
// ii. Non Blocking Request/Operations

// If it is of Non Blocking Request it processes the request and then send the user the respnose

// If it is a Blocking Operation then in order to resolve the blocking operation the request is send to 
// Thread Pool ( it has a thread , it consist of threads which is responsible for fullfilling the blocking
// request ). Each request is assigned a thread to process the work .
// It checks if it has free thread/worker then it assigns it to the request.
// When the work is finished that thread will return the result and will agin come back and sit in the thread pool.
// By default it has 4 threads 
// Suppose there is alredy 4 work going on all the 4 threads are assigned to it .
// Now when the 5th request comes it has wait till any of the thread becomes free.
// Thus it has scalability issue if the code is written using Blocking Operation.
// Thus it is Good to use always Non Blocking Opeation.

// You can increase the size of the ThreadPool 
// Default Thread Pool Size : 4
// Maximum : It depends on system to system how many cores does your system has 
// to know what is your cpu size 
// const os=require("os");
// console.log(os.cpus().length);
// Output : 8 

// const fs=require("fs");

// Blocking Request
// console.log("1");
// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);
// console.log("2");
// Output :
// 1
// Mayank : 98765
// Raj : 94532
// 2

// Non Blocking Request 
// console.log("1");
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     console.log(result);
// })
// console.log("2");
// Output :
// 1
// 2
// Mayank : 98765
// Raj : 94532