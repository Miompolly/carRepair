const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
     
    const userExist = await User.findOne({ username: req.body.username })
    
    if(userExist){
        return res.status(400).json({message:"User already exist"})
    }
    


    const user = await User.create({
      username: req.body.username,
      password: hashed
    });
    

    res.status(201).json({
      message: "User registered successfully",
      user: user
    });

  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message
    });
  }
};

const login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) {
    return res.status(400).json({ message: "Invalid password" });
  }

  // ✅ Add username + role into token
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  // ✅ Return token + user data
  res.json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      username: user.username,
      role: user.role
    }
  });
};


const getAllUsers = async(req,res)=>{
    try {
        const users=await User.find()
      res.status(200).json({
        message: "Data retrieved",
        users:users
      })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
  
module.exports={register,login,getAllUsers}