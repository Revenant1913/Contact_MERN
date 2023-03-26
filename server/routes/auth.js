const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require("../models/user")

router.post("/login");

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res
        .status(400)
        .json({error: "Enter all fields."})

    try{
      const hashedPassword = await bcrypt.hash(password, 12)
      const newUser = new User({name, email, password}) //creating new model  
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
})

module.exports = router;