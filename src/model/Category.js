const {model, Schema, Schema: {Types: {ObjectId}}} = require ('mongoose')

const userScheme = new Schema({
    name:{
        type: String,
        default: '', 
    },
    eventDate:{
        type: Date,
        default: '', 
    },
    users: [{
        type: ObjectId,
        ref: "Users",
    }]
})

module.exports = model("Category",userScheme)