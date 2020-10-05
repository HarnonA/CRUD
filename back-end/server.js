const PORT = 3001;


const app = require('express')();
const bodyParser = require('body-parser');
var cors = require('cors');
const { response } = require('express');

const routes = require('./routes/index')
const sessionsRouter = require('./routes/sessions')
const login = require('./routes/login')

app.use(bodyParser.json());
app.use(routes)
app.use(sessionsRouter)
app.use(login)
app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDB', { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to DB');
});

const Medication = require('./models/medications.model');
const User = require('./models/users.model');



app.get('/med', async function (req, res) {

  try {
    await Medication.find((err, m) => {
      if (err) res.send(err)
      else {
        res.send(m)

      }
    })
  }catch(e) { console.log("errinho")
  console.log(e)}
})




app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`)
})