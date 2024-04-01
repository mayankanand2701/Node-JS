const express=require("express");
const {
    handleGetAllUsers,
    handlegetUserById,
    handleDeleteUserById,
    handleUpdateUserById,
    handleCreateNewUser
}=require("../controllers/user");

// here we need to import extra thing 
const router=express.Router();

// Routes

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
.route("/:id")
.get(handlegetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);

module.exports=router;
