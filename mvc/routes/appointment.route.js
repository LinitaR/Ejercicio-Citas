const express = require('express'),
router =  express.Router(),
appointmentCtrl = require('../controllers/appointment.controller')

router.post('/', appointmentCtrl.create)
router.get("/", appointmentCtrl.list);
//router.put('/', appointmentCtrl.update)
router.post('/status', appointmentCtrl.enable)
router.delete('/:_id', appointmentCtrl.delete)


module.exports = router
