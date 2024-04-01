const User=require("../models/user");

async function handleGetAllUsers(req,res){
    const allDBUser=await User.find({});
    return res.json(allDBUser);
}

async function handlegetUserById(req,res){
    const user=await User.findById(req.params.id);
    if(!user) return res.status(404).json({Error : "User Not Found !"});
    return res.json(user);
}

async function handleUpdateUserById(req,res){
     // this change will come form the frontend by we are doing here just to demonstrate 
     await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"});
     return res.json({status:"Successfully Changed the Details of User "});
     // now view the change in the database or in postman 
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
     return res.json({status:"Successfully Deleted the User "});
     // now view the change in the database or in the postman
}

async function handleCreateNewUser(req,res){
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
    return res.status(201).json({msg:"Successfully created new user with id : ",id:result._id});
}

module.exports={
    handleGetAllUsers,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
}