//CONTROLLER CAN CONTAIN ALL THE LOGIC FOR API REQUESTS

const asyncHandler = require('express-async-handler') //Wraps each controller function to catch and handle exceptions without the need for try-catch blocks in every function.

const Contact= require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts= await Contact.find()
    res.status(200).json(contacts)
})

//@desc create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is:" + req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const contact= await Contact.create({
        name,
        email,
        phone,
    })

    res.status(201).json(contact)
})

//@desc Get a contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async(req, res) => {

    const contact = await Contact.findById( req.params.id);
    if(!contact){
        req.status(404);
        throw new Error("Contact Not Found")
        // res.status(404).json({message: "Contact not found "});
        // return;
    }
    res.status(200).json(contact)
    // res.status(200).json({ message: `Get contact for ${req.params.id} ` })
})

//@desc update a contact
//@route PUT /api/contacts
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404)
        throw new Error("not found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id, //id of the doc to be updated
        req.body, //updated data that needs to be sent 
        {new: true} // if set to true then means hat send the new/updated data 
    );
    res.status(200).json({updatedContact})
})

//@desc delete a contact
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404)
        throw new Error("not found")
    }

    await Contact.deleteOne()
    res.status(200).json(contact)
})




module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact, deleteContact
}