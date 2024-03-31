// Model View Controller

// All this Folder or MVC Structure is inside the Project-01

// Models folder contain all the models
// Controllers it will have all the controllers 
// Routes it will have all the routes 
// Views it will have all the views 
// connection.js files stores all type of connections from the database
// Middlewares folder will consist of all the middle wares

// Node.js is a popular runtime environment for developing scalable, high-performance web applications. 
// It uses an event-driven, non-blocking I/O model that allows for building real-time, data-intensive applications. 
// To build such applications, developers often use the Model-View-Controller (MVC) architecture pattern.

// 1. What is MVC?
// MVC is a software architecture pattern that separates an application into three interconnected components: 
// the Model, the View, and the Controller. This pattern was first introduced in the 1970s for developing desktop 
// graphical user interfaces (GUIs) but has since been adopted in web application development.
// In an MVC architecture, the Model represents the application's data and business logic, the View represents 
// the presentation layer or the user interface, and the Controller acts as an intermediary between the Model and
//  the View. The three components work together to provide a clear separation of concerns, 
//  making the application easy to maintain and test.

// 2. Why use MVC in Node.js?
// Node.js is a popular platform for building server-side applications due to its event-driven,non-blocking I/O 
// model.It allows developers to write scalable, high-performance applications that can handle a large number of
// simultaneous requests.However, as applications grow more complex, it becomes increasingly challenging to
// maintain code and keep it organized. The MVC architecture pattern provides a clear separation of concerns,
// making it easier to manage code and enhance the application's functionality over time.

// 3. The Components of MVC
// The three interconnected components of MVC are the Model, the View, and the Controller. 
// Let's take a closer look at each of these components.
// Model :
// The Model is responsible for managing the application's data and business logic. It interacts with the database or 
// any other data source to perform operations such as inserting, updating, deleting, and retrieving data.
// View :
// The View is responsible for presenting data to the user. It generates the HTML, CSS, and JavaScript that make 
// up the user interface. The View can also receive user input and send it to the Controller for processing.
// Controller : 
// The Controller is responsible for receiving requests from the View, processing them, and updating the Model
//  accordingly. It acts as an intermediary between the Model and the View, ensuring that both components remain
//   decoupled.

// Benefits of using MVC in Node.js
// Using the MVC architecture pattern in Node.js provides several benefits, including:
// Separation of concerns: The Model, View, and Controller have clearly defined responsibilities, which makes it 
// easier to develop, maintain, and scale the application.
// Reusability: Because the application is divided into separate components, you can reuse the components across 
// different parts of the application or in other applications.
// Testability: Because each component has a clear responsibility, it's easier to write unit tests for each 
// component, which makes it easier to test the application as a whole.
// Flexibility: Because the components are loosely coupled, you can modify or replace one component without 
// affecting the others, which makes it easier to adapt to changing requirements or technologies.