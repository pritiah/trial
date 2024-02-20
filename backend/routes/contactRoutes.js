const express= require ("express")
const router= express.Router();
const {getContacts, createContact, getContact, updateContact, deleteContact}= require("../controllers/ContactController")

router.route("/").get(getContacts);  //fetches all contacts 

router.route("/").post(createContact); //creates new contacts 

router.route("/:id").get(getContact); //fetches a contact by id 

router.route("/:id").put(updateContact) //updates a contact by id 

router.route("/:id").delete(deleteContact)// deletes a contact by id 

module.exports=router; 