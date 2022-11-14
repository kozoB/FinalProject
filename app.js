require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
var MongoDBStore = require("connect-mongodb-session")(session);

const app = express();
const port = process.env.PORT || 3000;

const sessionStoreOptions = {
  uri: process.env.MONGODB_URI,
  collection: "sessions",
};

const store = new MongoDBStore(sessionStoreOptions);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    store,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

app.set("layout", "./layout/main");
app.set("view engine", "ejs");

const AuthRoutes = require("./routes/AuthRoutes");
const ShopRoutes = require("./routes/ShopRoutes");

const cookieParser = require("cookie-parser");

app.use("/", AuthRoutes, ShopRoutes);
app.use(cookieParser());

app.listen(port, () => console.log(`Listening to port ${port}`));
