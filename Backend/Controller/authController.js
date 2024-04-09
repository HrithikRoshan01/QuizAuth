const User  = require('../models/user')
const {hashPassword ,comparePassword} = require('../helper/auth')
const jwt = require('jsonwebtoken');


const test = (req,res)=>{
    res.json('test ')
}

//register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name) {
            return res.json({
                error: 'Name is required'
            });
        }
        if (!password) {
            return res.json({
                error: 'Password is required'
            });
        }
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: 'Email is already taken'
            });
        }
        const hashedPassword = await hashPassword(password)
        const user = await User.create({ 
            name, 
            email, 
            password:hashedPassword });
        return res.json(user);
    } catch (error) {
        console.error('Error occurred during registration:', error);
        return res.status(500).json({
            error: 'An error occurred during registration. Please try again later.'
        });
    }
};
//login 
const loginUser = async(req,res) => {
    try {
        const {email,password} = req.body;
        console.log(email,password)

        //check
        const user = await User.findOne({email});
        if (!user){
            return res.json({
                error:"no user found"
            })
        }
        const match = await comparePassword(password,user.password)
        if(match){
            jwt.sign({email: user.email, id:user._id,name :user.name },process.env.JWT_SECRET,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token',token).json(user)
            })
        } 
    } catch (error) {
        console.log(error)   
    }
}
const getProfile = (req,res)=>{
    const {token} = req.cookies
    if (token){
        jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
            if(err) throw err;
            res.json(user)
        })
    }else{
        res.json(null)
    }
}

const logoutUser = (req, res) => {
    // Clear the token cookie
    res.clearCookie('token');
    res.json({ success: true, message: 'Logged out successfully' });
};
module.exports={
    test,
    registerUser,
    loginUser,
    getProfile,
    logoutUser
}