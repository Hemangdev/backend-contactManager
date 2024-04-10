import mongoose from 'mongoose'


const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surName:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }
})

export const contactModel = mongoose.model("Contacts",contactSchema)