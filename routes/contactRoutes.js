const express = require("express");
const router = express.Router();
const {getAllContacts,createContact,updateContact,DeleteContact,getIndividualConatct} = require("../controller/ContactController")
const validateToken = require("../middleware/validatetoken");

router.use(validateToken)
//Get All Contact Detail
router.route("/").get(getAllContacts)

//Create Contact
router.route("/").post(createContact)

//Update Contact
router.route("/:id").put(updateContact)

//Delete Contact
router.route("/:id").delete(DeleteContact)

//Get Particular Contact
router.route("/:id").get(getIndividualConatct)

module.exports = router; 