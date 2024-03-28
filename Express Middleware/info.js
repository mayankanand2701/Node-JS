// Middleware

// Client -> Server

// Client -> Middleware -> Server
// So now our request won't go directly to the Server 
// Middleware is just a function we can do any type of processing here.
// Assume that here middleware checks for is everything right or there is no threat in the call
// If it finds a threat then it can return the respnose directly form the middleware without going to Server
// Thus request won't go till server function.

// Middleware is a function that runs for every request and response.
// In a code there can be multiple Middleware.

// Middleware functions can perform the following task :
// 1.Execute any code
// 2.Make changes to the request and respnose object.
// 3.End the request response cycle.
// 4.Call the next middleware function in the stack.
