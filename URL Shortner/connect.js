const moongose=require("mongoose");
moongose.set("strictQuery",true);

async function connectToMongoDB(url){
    return moongose.connect(url);
}
module.exports={
    connectToMongoDB,
}