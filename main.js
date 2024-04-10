import express from 'express';
import mongoose from 'mongoose'; 
import contactRoute from './Routes/contact.js'
import bodyParser from 'body-parser'; 
import cors from 'cors'; 


const app = express()
const PORT = 4000;
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
 
mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("DB connected successfully"); 
}).catch((err) => {
    console.log(err);
})





//Server configuration
app.listen(PORT,() => {
    console.log(`Server is Listening on ${PORT} Port`);
})