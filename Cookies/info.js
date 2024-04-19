// Server can send the reply for Authetication through two process :
// 1. Cookie
// 2. Response fron Server

// Now for every requeest we can check whether the request made has cookie named UDI exist or not 
// If not the user is looged out.

// If cookie is presernt now vaidate the token if the token is valid then you will get the detiasl for current 
// user data 

// Cookies are Domain Specific
// We can specificy the domain name by ourself also
// We can also set the expiry for the cookie it will be deleted after the time you provided hence you will be
// automatically logged out from the server.

// The problem with the cookie is that it is limited only to browser it wont work with the mobile application.

// If the response is send through the server u need to store the token at any place in the user side
// for every request we make a header and for every request we validate 
// The Standard way is there exits Autheisation header 
