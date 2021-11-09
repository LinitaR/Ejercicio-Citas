const ctrlappointment = {},
appointment = require('../models/appointment'),
message = require('../config/message')

ctrlappointment.create = async (req, res) => {
  const newappointment = new appointment({
    date : req.body.date,
    hour: req.body.hour,
    document: req.body.document,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    status: req.body.status
  });
  await newappointment.save();
  res.json({ msg: message.success, status: true });
};

ctrlappointment.list = async (req, res) => {
  const appointments = await appointment.find();
  //console.log("appointments", appointments);

  res.json(appointments);
};

ctrlappointment.enable = async (req, res) => {
  const {_id, status} = req.body
  await appointment.findOneAndUpdate({_id:_id}, {status:status})
  res.json({status: true})
}

ctrlappointment.delete = async (req,res) => {
  console.log(req.params._id);
  const {_id} = req.params ;
  const appointments = await appointment.deleteOne({_id:_id});
  res.json({status : true});
}

module.exports =  ctrlappointment