import express from "express";
import bodyParser from 'body-parser';
const PORT = process.env.PORT||8080;
const app = express();
import recieptController from './controller/recieptController.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test',(req,res)=>{
    console.log(`testroute 1 `)
    res.json({message:`test1`})
})


app.listen(PORT, () =>{
    console.log(`Port is running on ${PORT}`)
})

app.post(`/receipts/process`,recieptController.calculateTotal, recieptController.post);


app.use((req,res,next)=>{
    return res.status(400).send('Domain not found')
});
app.use((req,res,next)=>{
    const defaulterr = {
        log : `Error Code 500`,
        status: 500,
        message : 'Reached Global Error Handler'
    }
    const errObj = Object.assign({},defaulterr,err)
    return res.status(errorObj.status).json(errObj.message)
})


app.post('/receipts/process',recieptController.calculateTotal)