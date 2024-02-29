const express = require('express')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const regRouter = require('./routes/register.js')
const logRouter = require('./routes/login.js')
const profileRouter = require('./routes/profile.js')
const currencyRouter = require('./routes/currency.js')
const carRouter = require('./routes/car.js')
const newsRouter = require('./routes/news.js')
const carouselRouter = require('./routes/carousel.js')
const userRouter = require('./routes/user.js')

const port = 3000
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/register', regRouter)
app.use('/login', logRouter)
app.use('/profile', profileRouter)
app.use('/currency', currencyRouter)
app.use('/car', carRouter)
app.use('/news', newsRouter)
app.use('/carousel', carouselRouter)
app.use('/user', userRouter)


let db = mongoose.connect("mongodb://127.0.0.1:27017/du")

db.then((success) => {
    app.listen(port)
}).catch(e => console.log(e))

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "heyossam11@gmail.com",
      pass: "fbzz ovpr trxr jcjb",

    },
    tls:{
        rejectUnauthorized: false,
    }
  });


  app.post('/', async (req,res) => {
    const info = await transporter.sendMail({
        from: 'heyossam11@gmail.com', 
        to: req.body.gmail, 
        subject: 'hello', 
        text: 'Welcome DU',  
      }); 

    console.log("Message sent: %s", info.messageId);
})
