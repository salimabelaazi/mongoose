const mongoose = require("mongoose")

const personSchema= new mongoose.Schema({
    name: {typr: String, required:true},
    age: Number,
    favoriteFoods:[String]
})
const Person =mongoose.model("Person", personSchema)

module.exports=Person
