const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');

const app = express();
const port = 80;

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);
app.use(session({
    secret: 'foo',    
    saveUninitialized: false,
    resave: false
}))

app.set('layout', './layout/main')
app.set('view engine', 'ejs')

const AuthRoutes = require('./routes/AuthRoutes');
const ShopRouts = require('./routes/ShopRouts');

const cookieParser = require('cookie-parser');


app.use('/', AuthRoutes,ShopRouts);
app.use(cookieParser())

app.listen(port, () => console.log('Listening to port ${port}'));