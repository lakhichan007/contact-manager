const express = require('express')
const router = express.Router();
const User = require('../model/signuser')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
router.use(express.json())
const { body, validationResult } = require('express-validator')
const validateToken = require('../middle/authentic')







router.get('/', validateToken,(req, res, next) => {
    res.status(200).json({
        msg: "hello its get request"
    })
})
router.post('/signup', (req, res, next) => {

    bcrypt.hash(req.body.password,10,async function(err, hash) {
        if (err) {
            return res.status(500).json({
                error:err
            })
        } else {
            const user = new User({
                password: hash,
                email: req.body.email,
            })
            user.save()
                .then(result => {
                    console.log(result);
                    res.status(200).json({
                        newUser: result
                    })
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    })
                })
        }
    })

})





router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const data = await User.findOne({ email: email })
        if (!data) {
            return res.status(400).json({ message: "USER NOT REGISTERED" })
        } else {
            bcrypt.compare(password, data.password, async function (err, result) {
                if (err) {
                    return res.status(500).json({ message: err.message })
                }
                else {
                    // const token = jwt.sign({
                    //     exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                    //     // data: data._id

                    // }, "10XBOOTCAMP");
                    const token = jwt.sign({
                        email:email

                    },"10XBOOTCAMP") 
                    // console.log(jwt.verify("10XBOOTCAMP"))
                    const decode = jwt.verify(token,"10XBOOTCAMP")
                    console.log(decode)

                    return res.status(200).json({ message: "Success", token })

                }
            });
        }

    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
})








module.exports = router;