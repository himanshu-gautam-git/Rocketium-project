const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:8001/species-api", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("No connection");
})