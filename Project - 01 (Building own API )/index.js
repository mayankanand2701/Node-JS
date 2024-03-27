const express=require("express");
const fs=require("fs");
const app=express();
const users=require("./MOCK_DATA.json");
const port=8000;

// Express Middleware - Plugin
// before putting this plugin when the post request was send through postman the ouput was :
// Body undefined
// But after defineing the below one the ouput comes in json format for the data we have passed through postman
app.use(express.urlencoded({extended:false}));
// The output is :
// Body [Object: null prototype] {
//     first_name: 'Mayank',
//     last_name: 'Anand',
//     email: 'mayankanand@gmail.com',
//     gender: 'Male',
//     job_title: 'Software Enginner'
//   }

// We have downloaded the mock 1000 data from mockaroo.com
// Bascially the sever is hybrid server it means it should work for mobile phone,browser everything

app.get("/users", (req, res) => {
    const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")} 
    </ul>
    `;
    res.send(html);
});

// Routes 

app.get("/api/users",(req,res)=>{
    // It will list all the data on the server
    return res.json(users);
});

// Insted of writing the indiviual code for each we are adding then in the same route

app.route("/api/users/:id").get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=>user.id==id);
    return res.json(user);
}).put((req,res)=>{
    // TODO : Edit the user with the id
    return res.json({status:"pending"});
}).delete((req,res)=>{
     // TODO : Delete the user with the id
     return res.json({status:"pending"});
});

// app.get("/api/users/:id",(req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find(user=>user.id==id);
//     return res.json(user);
// });

app.post("/api/users",(req,res)=>{
    // TODO : To create a new User
    const body=req.body;
    // console.log("Body",body);
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"Success",id:users.length});
    });
});

// app.patch("/api/users/:id",(req,res)=>{
//     // TODO : Edit the user with the id
//     return res.json({status:pending});
// });

// app.delete("/api/users/:id",(req,res)=>{
//     // TODO : Edit the user with the id
//     return res.json({status:pending});
// });

app.listen(port,()=>console.log(`Server Started at Port ${port}`));

