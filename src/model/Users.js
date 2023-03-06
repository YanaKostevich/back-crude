const {model, Schema, Schema: {Types: {ObjectId}}} = require ('mongoose');

const userScheme = new Schema({
    name:{
        type: String,
        default: '', 
    },
    email:{
        type: String,
        default: '', 
    },
    number:{
        type: Number,
        default: '', 
    },
    eventDate:{
        type: Date,
        default: '', 
    },
    category: {
        type: ObjectId,
        ref: "Category",
    }
})

module.exports = model("Users", userScheme);