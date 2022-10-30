const mongoose = require('mongoose');

const PnSchema = new mongoose.Schema({

  name: {
    type: String,
  },

  category: {
    type : String,
    enun : ['תאורה' , 'נורות לד', 'מפסקים ושקעים' , "פעמונים", "גלאים ושעונים", "אינסטלציה חשמלית"]

  }, 

  image: {
    type : String,
  }, 

  price:{
    type: Number
  },
  
  id:{
    type: String
  }
  
});


module.exports = mongoose.model('Pn', PnSchema);