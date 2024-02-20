const mongoose= require ('mongoose')

//Defines a schema for the contact documents in MongoDB, specifying name, email, and phone as required fields.

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "please add the contact name "],
    },
    email:{
        type: String,
        required: [true, "please add email"]
    },
    phone:{
        type: String,
        required: [true, "please add phone number "]
    },
    

},
{
    timestamps: true,
})

module.exports= mongoose.model("contact", contactSchema);

//The timestamps: true option automatically manages createdAt and updatedAt fields for each document.