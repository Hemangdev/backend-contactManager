import { contactModel } from "../Models/contactModel.js"






//POST api for creating the user
export const createNewContact = async (req,res) => {
    try {
        const {name,surName,mobile} = req.body
        const contact = contactModel.create({
            name,
            surName,
            mobile
        })
        res.status(201).json({
            success:true,
            mess:"Contact Created",
            contact
        })
    } catch (error) {
        res.status(501).json({
            success:false,
            mess:"Server Error",
            error
        })
    }
}
//GET api for getting all the user
export const getAllContacts = async (req,res) => {
    try {
        const contacts = await contactModel.find({})
        res.status(200).json({
            success:true,
            contacts
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error
        })
    }
}
//Dynamic api route for getting single contact
export const getSpecificContact = async (req,res) => {
    try {
        const contact = await contactModel.findById(req.params.id);
          
        if (!contact) {
          return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}
//Updating the contact
export const updateContact = async (req,res) => {
    try {
        const newContacts = await contactModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({
            success:false,
            newContacts
        })
    } catch (error) {
        res.status(501).json({
            success:false,
            error
        })
    }
}
//Deleting the contact
export const deleteContact = async (req,res) => {
    try {
        const result = await contactModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            mess:"Deleted successfully",
            result
        })
    } catch (error) {
        res.status(501).json({
            success:false,
            mess:"Error Occured",
            error
        })
    }
}