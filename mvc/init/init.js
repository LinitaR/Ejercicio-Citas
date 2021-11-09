const appointment = require('../models/appointment')

exports.createAppointment = function(){
   var newAppointment = new appointment({
      document: 9368413658465,
      name: 'Pepito',
      phone: 555555,
      email: 'pepito@gmail.com', 
      status: true
   })
   newAppointment.save()
}