const path=require("path");
const express=require("express");
const multer  = require('multer');

// this means any file coming from the frontend put that in a folder name "uploads"
// const upload = multer({ dest: 'uploads/' });

const app=express();
const PORT=8000;

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        // callback need two parameter the error and the destination where the folder is needed to be stored
        cb(null, './uploads')
    },
    filename: function (req, file, cb){
        // we can take the user name to here but if two person uploading have the same file name will create the error
        return cb(null,`${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    return res.render("homepage");
});

app.post("/upload",upload.single("profileImage"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/");
});

app.listen(PORT,()=>console.log("Server started at PORT : 8000"));
