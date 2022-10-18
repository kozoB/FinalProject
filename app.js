const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();

// const mongoose = require("mongoose");
// mongoose.connect('mongodb+srv://shovalash1:Excel1957@shovaldb.mg0smvv.mongodb.net/shoval?retryWrites=true&w=majority' , { 
//     useUnifiedTopology: true, 
//     useNewUrlParser: true 
// });


// const session = require('express-session')
// app.use(session({
//     secret : 'foo' , 
//     saveUninitialized: false,
//     resave:false
// }))




const port = process.env.PORT || 80;

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layout/main')
app.set('view engine', 'ejs')

const routes = require('./routes/recipeRoutes.js')

app.use('/', routes);


app.listen(port, () => console.log('Listening to port ${port}'));