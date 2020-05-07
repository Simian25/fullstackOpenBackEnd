require('dotenv').config()
const express = require('express')
const morgan = require('morgan');
const app = express()


morgan.token('post', (req) => {
  console.log(req.body)
  if(req.method==='POST'){
    return JSON.stringify(req.body)
  }
})

app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post '))
app.use(express.json())

const Person = require('./modules/person')

 
  



  app.get('/',(req,res) => {
    res.send('<h1>wrong entry </h1>')
  })
app.get('/api/persons',(req,res)=>{
    Person.find({}).then(persons => res.json(persons))
})
app.post('/api/persons', (request, response) => {
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
})




app.get('/api/persons/:id',(req,res)=>{
   Person.findById(req.params.id).then(person => res.json(person.toJSON()))
    
})
app.delete('/api/persons/:id',(req,res)=>{
  const id = Number(req.params.id);
  persons = persons.filter((pers)=>pers.id!==id)
  res.status(204).end();
})

app.get('/info',(req,res)=>{
    res.send(`<p>Phonebook has info for ${persons.length} people</p> <p>${Date()}</p>`)
})
const PORT =  process.env.PORT||3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})