const express = require("express");

const {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

// Create Contact
router.post("/", createContact);

// Get All Contacts
router.get("/", getContacts);

// Get Single Contact
router.get("/:id", getContactById);

// Update Contact
router.put("/:id", updateContact);

// Delete Contact
router.delete("/:id", deleteContact);

module.exports = router;