const mongoose = require('mongoose');



if ( process.argv.length<3) {
    console.log('give password,name and number as argument')
    process.exit(1)
  }
else{
 
  
  

  
  if(process.argv.length==3){
    Person.find({}).then(result => {
        result.forEach(person => {
          console.log(person.name,person.number)
        })
        mongoose.connection.close()
      })
    }else{
        const name = process.argv[3]
const number = process.argv[4]
  
  const personObject =new  Person({
    name:name,
    number:number
    
})
personObject.save().then(result => {console.log(`${name} added to phonebook`)
    mongoose.connection.close();
})
    }


}
