// Rest API or Restfull API

// It is a rule
// 1. It works on Server Client Architecture
//    Means Server and Client are seperate entity it should not be depedent on each other.
//    Response for the server can be image,text,json object,html document
//    Suppose client is a blog website which request for some blog then your server gets that blog from the database
//    then the server gets the data and return that html blog to the browser as it was called from the browser
//    the html code was renderd on the window but what about if the request was made from mobile,alaxa it doesnot
//    have the capability to render html.As the html is made by server we are also controlling the return type format
//    Thus Dependent on my server .In Restfull API it should not work like this
//    This Respnose sent in Html format is also known as SSR(Server Side Rendering)
//    Data fetched from DB can also be sent in JSON Format(key-value pair)
//    Now client will read this and will automatically render on their side
//    If you are sure that your client is Browser only then you can use Html format data so that there is less load
//    on the side of client.
//    If it is cross platform then you should send the data in json format.

// 2. Always respect all HTTP Methods (PUT,GET,POST,PATCH,DELETE)