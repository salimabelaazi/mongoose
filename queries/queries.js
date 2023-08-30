const Person= require ("../models/personModel")

let person = new  Person ({
    name: "ahmed",
    age: 30,
    favoriteFoods:["pizza", "penne"]
})
const createAndSavePerson= async() => {
    try {
     await person.save()   
    } catch (error) {
       console.log(error) 
    }
}

const arrayOfPeople= [
    {
        name: "amin",
        age: 23,
        favoriteFoods:["farfale", "esclope grillé"]  
    },
    {
        name: "asma",
        age: 26,
        favoriteFoods:["farfale", "griallade mixte"]  
    },
    {
        name: "mouhamed",
        age: 20,
        favoriteFoods:["baguette farcie", "spaghetti fruit de mer"] 
    },
]

const createManyPeople= async() => {
    try {
     await Person.create(arrayOfPeople)  
    } catch (error) {
       console.log(error) 
    }
}
 
const searchByName = async (name) => {
    try {
        const data = await Person.find({name: `${name}`})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const searchByFood = async (food) => {
    try {
        const data = await Person.findOne({favoriteFoods: `${food}`})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const searchById = async (id) => {
    try {
        const data = await Person.findById(`${id}`)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
const clasicUpdate = async (id) => {
    try {
        const data = await Person.findById(`${id}`)
        data.favoriteFoods.push("Hamburger")
        data.save()
        console.log(data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const updateAge = async (personName) => {
    try {
        const data = await Person.findOneAndUpdate({name: `${personName}`}, {age:20}, {new: true})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const deletePerson = async (id) => {
    try {
        await Person.findByIdAndRemove( `${id}`)
        console.log("Person deleted")
    } catch (error) {
        console.log(error)
    }
}

const deleteManyPeople = async (name) => {
    try {
     await Person.deleteMany ({name :`${name}`})
        console.log("People deleted")
    } catch (error) {
        console.log(error)
    }
}  

const chainSearch = async () => {
    try {
   const dta =  await Person.find ({favoriteFoods : `farfale`} )
   .sort({name: 1})
   .limit(2)
   .select({age: false})
   .exec()
   console.log(data)
        console.log("People deleted")
    } catch (error) {
        console.log(error)
    }
}  





module.exports = {
    createAndSavePerson,
    createManyPeople,
    searchByName,
    searchByFood,
    searchById,
    clasicUpdate,
    updateAge,
    deletePerson,
    deleteManyPeople,
    chainSearch
}