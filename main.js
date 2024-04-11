import express from 'express';
import mongoose from 'mongoose'; 
import contactRoute from './Routes/contact.js'
import bodyParser from 'body-parser'; 
import cors from 'cors'; 
import dotenv from 'dotenv' 


const app = express()
dotenv.config()
const PORT = process.env.PORT;

app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT","DELETE"],  
}))
app.use(cors({
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use('/api/v1', contactRoute) 
 
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("DB connected successfully"); 
}).catch((err) => {
    console.log(err);
})





//Server configuration
app.listen(PORT,() => {
    console.log(`Server is Listening on ${PORT} Port`);
})