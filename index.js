if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const morgan = require('morgan')
const app = express()


morgan.token('post', (req) => {
  console.log(req.body)
  if(req.method==='POST'){
    return JSON.stringify(req.body)
  }
})

app.use(express.json())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post '))

const Person = require('./modules/person')

 
  app.put('/api/persons/:id',(req,res)=>{
    const body=req.body

    const person={
      name:body.name,
      number:body.number
    }
    Person.findByIdAndUpdate(req.params.id,person,{new:true})
    .then(updatedPerson => res.json(updatedPerson.toJSON()))

  })


  app.get('/',(req,res) => {
    res.send('<h1>wrong entry </h1>')
  })
app.get('/api/persons',(req,res)=>{
    Person.find({}).then(persons => res.json(persons))
})
app.post('/api/persons', (request, response,next) => {
  const body = request.body

  if (!body.name||!body.number) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => response.json(savedPerson.toJSON()))
  .catch(err => next(err));
})




app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
      .then(person => {
        if (person) {
          response.json(person.toJSON())
        } else {
          response.status(404).end()
        }
      })
      .catch(error => next(error))
  })
app.delete('/api/persons/:id',(req,res,next)=>{
  Person.findByIdAndRemove(req.params.id).then(result => {
      res.status(204).end();
  })
  .catch(error => next(error));
})

app.get('/info',(req,res)=>{
   Person.countDocuments({},(err,cnt)=>res.send(`<p>Phonebook has info for ${cnt} people</p> <p>${Date()}</p>`))

    
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  }  else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)




const PORT =  process.env.PORT||3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})