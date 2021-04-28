const mongoose=require("mongoose");

const validator=require("validator");

const speciesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    size:{
        type:Number,
        reuired:true

    },
     color:{
        type:String,
        required:true
    },
    weight:{
        type:Number,
        required:true
    }
})
const Species=new mongoose.model('Species',speciesSchema);

module.exports = Species;