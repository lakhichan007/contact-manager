const mongoose=require('mongoose')

const schema=mongoose.Schema

const contactsSchema=new schema({
    name:String,
    designation:String,
    company:String,
    industry:String,
    email:String,
    mobile:String,
    country:String,
    userid:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
})


const Contacts=mongoose.model('Contact',contactsSchema)

module.exports=Contacts
