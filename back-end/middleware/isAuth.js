// import { Request, Response } from 'express'
// const { Request, Response } = require('express')
const jwt = require('jsonwebtoken');
// import { verify } from 'jsonwebtoken'
const TOKENKEY = "b986f865083f94392cdb7d2e5724c335";

function isAuth(req,res,next) {

// function isAuth(Request, Response) {
    const authHeader = req.headers.authorization;
    
   
    if (!authHeader)
        res.send({ "error": "Falta de autenticação jwt" })

    const [bearer, token] = authHeader.split(' ')
    try {
        const decoded = jwt.verify(token, TOKENKEY)
        console.log("my token")
        console.log(decoded)
        return next()
        // return res.send("Login sucess")
        // res.next()
    } catch (err) {
        res.send({ "error": "JWT inválido" })
    }
}

module.exports = isAuth;