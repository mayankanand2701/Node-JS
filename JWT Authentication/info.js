// In Statefull Authentication if the server is restart or seesion is lost then the user is logged out.
// The above authentication is very memory intensive as server as restricted memory

// Statlesss Aurhentication
// JWT stands for Jason Web Token

// Stateless authentication operates without storing the authentication state on the server. Instead, each request
//  from the client must contain all necessary authentication information for the server to verify its authenticity.
//   Let's use the example of a parking ticket to illustrate stateless authentication:

// Imagine a scenario where you park your car in a parking lot and use a self-service kiosk to pay for your parking 
// ticket. Here's how it relates to stateless authentication:

// Request Authentication: When you arrive at the parking lot, you approach the self-service kiosk to pay for your 
// parking. You authenticate yourself by inserting coins or using a credit card to pay for a ticket. This initial 
// authentication is similar to providing your credentials (e.g., username and password) to authenticate on a website.

// Ticket Issuance: After successful payment, the kiosk issues you a parking ticket with a specific expiration time.
//  This ticket serves as proof of your authentication and authorization to park in the lot for the duration 
//  specified. Similarly, in stateless authentication, upon successful authentication, the server issues a token 
//  containing necessary authentication information, such as a JWT (JSON Web Token).

// Stateless Interaction: With the parking ticket in hand, you can freely move within the parking lot until the 
// ticket expires. There's no need for further interaction with the kiosk or the parking lot system unless you need 
// to extend your parking duration or have other inquiries. Likewise, in stateless authentication, once the client 
// receives the authentication token, it includes this token in subsequent requests to access protected resources 
// on the server. Each request carries its authentication information, and the server validates the token without
//  maintaining any session state.

// Ticket Expiration: When your parking ticket expires, you must either leave the parking lot or obtain a new ticket
//  by re-authenticating at the kiosk. Similarly, in stateless authentication, the client must obtain a new 
//  authentication token (e.g., by logging in again) once the current token expires or is invalidated.

// In this analogy, the parking ticket serves as the authentication token, and the client (driver) must present
//  it with each request to prove their authorization to park in the lot. This illustrates the concept of stateless 
//  authentication, where the server doesn't need to maintain session state and can verify each request 
//  independently.