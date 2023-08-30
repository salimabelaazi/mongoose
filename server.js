 const express= require ("express")
 const connectDB = require("./config/connectDB")

 require("dotenv").config()
 const queries = require ("/.queries/queries")
 connectDB()
//  queries.createAndSavePerson()

  
 const app = express()

 const PORT = process.env.PORT

 app.listen(PORT, err => {
    err ? console.log(err) 
        : console.log(`server is running on port ${PORT}`)
 })