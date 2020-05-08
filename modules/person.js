require('dotenv').config();
const mongoose = require('mongoose');

var uniqueValidator = require('mongoose-unique-validator');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const url = process.env.MONGO_URL;

console.log('connecting to', url);

mongoose
  .connect(url, { useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => {console.log('connected to MongoDB');
  })
  .catch(error => {console.log('error connecting to MongoDB:', error.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    unique: true
  },
  number: {
    type: String,
    minlength: 8,
    unique: true
  }
});

personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Person', personSchema);