const {Router} = require('express');
const {racine}= require('../controllers/ctrl')
const router = Router()

router.get('/',racine)


module.exports = router