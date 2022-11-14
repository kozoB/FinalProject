const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('eror', console.error.bind(console, "connection eror"));
db.once('open', function () {
    console.log('success connect to database')
})

require('./models/Category')
require('./models/Product')
require('./models/User')

