const asyncHandler= require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt")
//@desc register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req, res)=>{
    const {username, email, password} = req.body;
    if(!username|| !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const userAvailable= await User.findOne({email})
    if(userAvailable){
        res.status(400);
        throw new Error("user already registered")
    }

    //Hash Password
    const hashedPassword=  await bcrypt.hash(password,10)
    console.log("hashed: ", hashedPassword);

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    console.log(`user created ${user}`);
    if(user){
        res.status(201).json({_id:user.id, email:user.email})
    }else{
        res.status(400);
        throw new Error("invalid data")
    }

    res.json({message:"register user"});
})

const loginUser= asyncHandler(async(req,res)=>{
    res.json({message:"login user"})
})

const currentUser= asyncHandler(async(req,res)=>{
    res.json({message:"current user"})
})

module.exports ={registerUser, 
loginUser, 
currentUser}

