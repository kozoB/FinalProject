const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 80;

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);


app.set('layout', './layout/main')
app.set('view engine', 'ejs')

const routes = require('./routes/recipeRoutes.js')
const AuthRoutes = require('./routes/AuthRoutes');
const productsRouts = require('./routes/productsRouts');

const cookieParser = require('cookie-parser');
const { application } = require('express');


app.use('/', routes, AuthRoutes,productsRouts);
app.use(cookieParser())

app.listen(port, () => console.log('Listening to port ${port}'));