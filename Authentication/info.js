// Authentication generally means verification

// Authentication Patterns 
// They are of mainly two types :
// 1.Statefull : which maintains state or data on the server side
// 2.Stateless : which has no states

// 1. Statefull :
// Stateful authentication refers to a method of authentication where the server maintains the state of a 
// client's authentication session throughout their interaction. In simpler terms, it means that once a user 
// logs in, their authentication credentials are stored server-side, and the server remembers their logged-in 
// state until they log out or their session expires.

// Imagine you park your car in a paid parking lot. When you enter the parking lot, you need to authenticate 
// yourself by purchasing a ticket from the ticket booth. Once you've paid and received your ticket, 
// you have effectively authenticated yourself to the parking lot system.

// Here's how it relates to stateful authentication:

// Authentication: When you purchase the ticket, you authenticate yourself by providing payment. This is similar 
// to logging into a website with your username and password.

// Session Creation: Upon successful authentication (i.e., purchasing the ticket), the parking lot system creates
//  a session for your car. This session includes information such as your car's license plate number, the time you
//   entered the parking lot, and the validity period of your ticket.

// Stateful Interaction: As long as your ticket is valid (i.e., the session is active), you can freely move within
//  the parking lot without needing to re-authenticate. This is akin to navigating different pages on a website 
//  after logging in without having to provide your credentials repeatedly.

// Session Termination: When your ticket expires (i.e., your session ends), you need to re-authenticate by 
// purchasing a new ticket if you want to continue parking in the lot. Similarly, when your session on a website 
// expires or you log out, you need to re-authenticate to access restricted resources.

// In this analogy, the parking ticket serves as the session identifier, and the parking lot system maintains 
// the state of your authentication throughout your parking duration. This is a simplified example of stateful
//  authentication in action.

// Now lets see how it works in Nodes JS
// User gives it username and password to the server in return server gives the unique id called session uid
// The server should have kept a record about the id it has provided it to me.Now whenver we request anything 
// from the server now we pass out seesion id to the server .

// User can recieve this unique id in these formats :
// 1.In the form of Cookies
// 2.In the form of Response
// 3.In the form of Headers 

// Cookies are good option during server side rendering and in Rest API we generally user headers

// One very Important Question here that can be asked here .

// What if we store sessions in the database in the Case of Statefull 

// But in this case there is two problem :
// 1.Latency will increase very much for her request now you have to send the request to datbase that is 
// running on another server makes the request fetch the data and then compare so it can lead to delay of 
// 200-300 ms.

// 2.If for every query then you will make the read operation then the read bill will increase as in the real
// world you need to pay for every read and write operation to the database service provider.
// If any user will refresh the  page 10-12 times the read operation will be counted and bill will incerase.
// It is also not good idead that we use our databse for the checking the authentication in this way.