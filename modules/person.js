const mongoose = require('mongoose')

const url= process.env.MONGO_URL
console.log("connecting to",url);
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
.then(result => console.log("connection succeeded"))
.catch(err => console.log('error connecting to databas:',err.message))

const personSchema= mongoose.Schema({
    name: String,
    number: String
  })

personSchema.set('toJSON',{
    transform: (document, returnedObject)=>{
        returnedObject.id=returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)