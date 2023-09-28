const mongoose = require("mongoose")


const Item = mongoose.model("items",{
    name:{
        type:String,
        required:true
    }
});

module.exports = Item;