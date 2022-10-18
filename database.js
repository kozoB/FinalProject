const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://shovalash1:Excel1957@shovaldb.mg0smvv.mongodb.net/shoval?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('eror', console.error.bind(console, "connection eror"));
db.once('open', function () {
    console.log('connected')
})

require('./models/Category')
require('./models/Recipe')


