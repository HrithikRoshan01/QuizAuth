const express = require('express')
const router  = express.Router();
const cors = require('cors')
const {test,registerUser,loginUser,getProfile,logoutUser } = require('../Controller/authController')

router.use(
    cors({
        credentials: true,
        origin:'http://localhost:5173'

    })
)
router.post('/',loginUser)
router.post('/register',registerUser)
router.get('/profile',getProfile)
router.post('/logout', logoutUser)


module.exports = router