const {v4:uuidv4}=require("uuid");
const User=require("../models/user");
const {setUser}=require("../Service/auth");

async function handleUserSignup(req,res){
    const {name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.render("/");
}

async function handleUserLogin(req,res){
    // as the user to enter their emial and password
    const {email,password}=req.body;
    const user=await User.findOne({email,password});
   // console.log("User ",user);
    if(!user){
        res.render("login",{
            error:"Invalid Username or Password!"
        });
    }
    const seesionId=uuidv4();
    setUser(seesionId,user);
    res.cookie("Uid ",seesionId);
    return res.redirect("/");
}

module.exports={
    handleUserSignup,
    handleUserLogin,
}