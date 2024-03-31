const express=require("express");
// here we need to import extra thing 
const router=express.Router();

// Routers 
// All codes are written to directly fetch data from MongoDB

// we are changing here some request method like removing /api/users and all to make it simple and just learn
// how MVC works

router.get("/",async(req,res)=>{
    const allDBUser=await User.find({});
    return res.json(allDBUser);
});

router
.route("/:id")
.get(async(req,res)=>{
    const user=await User.findById(req.params.id);
    if(!user) return res.status(404).json({Error : "User Not Found !"});
    return res.json(user);
}).patch(async(req,res)=>{
    // this change will come form the frontend by we are doing here just to demonstrate 
    await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"});
    return res.json({status:"Successfully Changed the Details of User "});
    // now view the change in the database or in postman 
}).delete(async(req,res)=>{
     await User.findByIdAndDelete(req.params.id);
     return res.json({status:"Successfully Deleted the User "});
     // now view the change in the database or in the postman
});

router.post("/",async(req,res)=>{
    const body=req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title)
    {
        return res.status(400).json({msg:"All Fields should be Entered !"});
    }
    const result=await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        jobTitle:body.job_title,
        gender:body.gender,
    });  
    // console.log("Result ",result);
    return res.status(201).json({msg:"Success"});
});

module.exporst=router;
