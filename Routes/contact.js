import express from 'express' 
import { createNewContact, deleteContact, getAllContacts, getSpecificContact, updateContact } from '../Controller/config.js'

const router = express.Router()

// creating a new contacts
router.post('/add' ,  createNewContact)
// getting all the contacts
router.get('/all' , getAllContacts)
//Getting one single contact
router.get('/contacts/:id' ,getSpecificContact )
//Updating the contact
router.put('/update/:id' , updateContact)
//Deleting the contact
router.delete('/delete/:id' , deleteContact)

export default router;