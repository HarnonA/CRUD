
const login = require('express').Router()
const jwt = require('jsonwebtoken');

const User = require("../models/users.model")

const isAuth = require('../middleware/isAuth')

const cors = require('cors');
login.use(cors());




const TOKENKEY = "b986f865083f94392cdb7d2e5724c335";

// const sessionsRouter = Router()

login.post('/auth', async (req, res, next) => {
    console.log(req.body)
    res.header("Access-Control-Allow-Origin", "*");
    res.send(req.body)
})


login.post('/login', async (req, res) => {
    const myEmail = req.body.email
    const myPassword = req.body.password;

    try {
        const match = await User.findOne({ email: myEmail }).select('+password')

        if (match === null)
            return res.send("Email ou senha incorreto.")

        if (myPassword !== match.password)
            return res.send("Email ou senha incorreto.")
            

        delete match._doc.password

        
        const token = jwt.sign(
            {}, TOKENKEY,
            {
                subject: toString(match._id),
                expiresIn: '1d'
            });
            console.log(token)
        return res.send({...match._doc,token})
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
})

module.exports = login;