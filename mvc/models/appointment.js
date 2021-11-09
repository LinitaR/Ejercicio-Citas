const mongoose = require('mongoose')

var AppointmentSchema = new mongoose.Schema
({
    date : { type : Date , default : Date.now() },
    hour: { type : Date , default : Date.now() },
    document: {  type: Number, required: true, index: true },
    name: { type: String,  lowercase: true },
    phone: { type: Number, dropDups: true },
    email: String, 
    status: { type: Boolean,  default: false }
})


module.exports =  mongoose.model('mvc_appointment', AppointmentSchema)