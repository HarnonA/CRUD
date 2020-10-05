const routes = require('express').Router()


const sessionsRouter = require('./sessions')
const login = require('./login')


routes.get('/', function (req, res) {
    res.send("Uhuu, tá funcionando.")
  })


module.exports = routes;