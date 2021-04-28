const express=require("express");
require("./db/conn");
const Species=require("./models/species");
const app=express();
const port=process.env.PORT || 8000;


//create new species
app.post("/species",(req,res)=>{
  res.send("Request completed");
})

app.listen(port,()=>{
  console.log(`connection is set up at ${port} `)
})