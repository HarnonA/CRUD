// import { Router } from 'express';
// import { sign } from 'jsonwebtoken'
const sessionsRouter = require('express').Router()

const Medications = require("../models/medications.model")
const isAuth = require('../middleware/isAuth')

const cors = require('cors');
sessionsRouter.use(cors());

// sessionsRouter.use(isAuth)


const TOKENKEY = "b986f865083f94392cdb7d2e5724c335";

// const sessionsRouter = Router()


// sessionsRouter.post('/auth', async (req, res, next) => {
//     console.log(req.body)
//     res.header("Access-Control-Allow-Origin", "*");
//     res.send(req.body)
// })


sessionsRouter.post('/update',  isAuth, async (req, res) => {
    console.log(req.body.myMed)
    try {
        res.send( await Medications.findByIdAndUpdate(req.body.myMed._id,{ ...req.body.myMed }))
        // return await Medications.updateMany({ ...req.body.myMed })
    } catch (err) {
        console.log("update error")
        return res.status(400).json({ error: err.message })
    }
})

sessionsRouter.post('/insert', isAuth, async (req, res) => {
    console.log(req.body.medication)
    try {
        res.send( await Medications.insertMany(req.body.medication))
    } catch (err) {
        console.log("insert error")
        return res.status(400).json({ error: err.message })
    }
})

sessionsRouter.post('/delete', isAuth, async (req, res) => {
    try {
        res.send(await Medications.deleteOne({ _id: req.body.id }))
    } catch (err) {
        console.log("delete error")
        return res.status(400).json({ error: err.message })
    }
})

sessionsRouter.post('/search', async (req, res) => {
    res.send(await Medications.findOne({ _id: req.body.id }))
})



module.exports = sessionsRouter;