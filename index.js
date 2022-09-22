const nodemailer = require("nodemailer")
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.MAIL,
        pass: process.env.PASS
    }
})

let details = {
    from: 'emmanuelntekim000@gmail.com',
    to: 'ntekimemmanuelekpo@gmail.com',
    subject: 'Mail Testing',
    text: 'Nodemail testing is successful'
}

mailTransporter.sendMail(details, (err, info)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Mail successfully sent', info.response)
    }
})
app.listen(port, ()=>{console.log(`server running on ${port}`)})