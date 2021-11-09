const { Router } = require('express'),
router = Router()

router.use('/appointment', require('../routes/appointment.route'))  

module.exports = router