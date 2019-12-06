const express = require('express') 
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
var Run = require('./models/run')
var User = require('./models/user')
var Runs = require('./models/runs')
var util = require('util')
const fs = require('fs')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.listen(4000, () => console.log("server running on port 4000")) 

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: false
  };
const uri = "mongodb+srv://sfeng023:Fsy123456789@cluster0-sl1km.mongodb.net/cs179_run_test?retryWrites=true&w=majority"
mongoose.connect(uri, options) 
const runNames = mongoose.model("runs", Runs)

const UserModel = mongoose.model('user',User)

app.get("/listFromRun/:r", (req, res) =>
{
    var runName = req.params.r
    const R2 = mongoose.model(runName, Run, runName)
    R2.find({}).select("Year Block Eventlist.Event Eventlist.Event_Outcome.OutcomeTopic Eventlist.Event_Outcome.Score")
    .lean().exec(function(err, run) {
        if(err)
        {
            console.log("could not proccess " + err)
        }
        else
        {
            res.json(run) 
        }
      })
})
app.get("/listScoresAndEventName/:r", (req, res) =>
{
    var runName = req.params.r
    const R2 = mongoose.model(runName, Run, runName)
    R2.find({}).select("Eventlist.Event Eventlist.Event_Outcome.Score")
    .lean().exec(function(err, run) {
        if(err)
        {
            console.log("could not proccess " + err)
        }
        else
        {
            res.json(run) 
        }
      })
})
app.get("/listOutcomes/:r", (req, res) =>
{
    var runName = req.params.r
    const R2 = mongoose.model(runName, Run, runName)
    R2.findOne({}, {"Eventlist": {$slice: 1}})
    .select("Eventlist.Event_Outcome.OutcomeTopic").lean().exec(function(err, run) {
        if(err)
        {
            console.log("could not proccess " + err)
        }
        else
        {
            res.json(run) 
        }
    })
})
app.get("/listEvents/:r", (req, res) =>
{
    var runName = req.params.r
    const R2 = mongoose.model(runName, Run, runName)
    R2.find().select("Eventlist.Event")
    .lean().exec(function(err, run) {
        if(err)
        {
            console.log("could not proccess " + err)
        }
        else
        {
            res.json(run) 
        }
    })
})
app.get("/listEventswithSpecifics/:r/:y/:b", (req, res) => { 
    b = req.params.b
    y = req.params.y
    var runName = req.params.r
    const R2 = mongoose.model(runName, Run, runName)
    R2.findOne({Block: b, Year: y}).select("Eventlist.Event")
    .lean().exec(function(err, run) {
        if(err)
        {
            console.log("could not proccess " + err)
        }
        else
        {
            res.json(run) 
        }
    })
})
app.get("/listRunWithSpecifics/:r/:y/:b", (req, res) => { 
    b = req.params.b
    y = req.params.y
    var runName = req.params.r
    const R2 = mongoose.model(runName, Run, runName)
    R2.findOne({Block: b, Year: y})
    .lean().exec(function(err, run) {
        if(err)
        {
            console.log("could not proccess " + err)
        }
        else
        {
            res.json(run) 
        }
    })
})
app.get("/listCollections", (req, res) => {
    runNames.find().select("runName").lean().exec(function(err, run) {
        if(err)
        {
            console.log("could not proccess " + err)
        }
        else
        {
            res.json(run) 
        }
      })
})
app.get("/listScorewithEventAndOutcome/:r/:e/:o", (req, res) => {
    eName = req.params.e
    oName = req.params.o
    var runName = req.params.r
    const R2 = mongoose.model(runName, Run, runName)
    R2.findOne({
        'Eventlist.Event': eName
    }, 
    {"Eventlist.Event.$": 1}, 
    )
    .lean().exec(function(err, run) {
        if(err)
        {
            console.log("could not proccess " + err)
        }
        else
        {
            pValue = run.Eventlist[0].Event_Outcome
            notfound = true
            size = pValue.length
            i = 0
            while(notfound && i < size)
            {
                if(pValue[i].OutcomeTopic == oName)
                {
                    holder = pValue[i]
                    notfound = false
                }
                i++
            }
            res.json(holder)
        }
    })
})

app.post("/addUserToUserCollection", (req, res) =>
{
    var r = new UserModel(req.body) 
    r.save() 
    .then(run => {
        res.status(200).json({'run':'added successfully'}) 
    })
    .catch(err => {
        res.status(400).send("failed to create new cell")
    })
})

app.get("/validUser/:user/:pass", (req, res)=>
{
    var u = req.params.user
    var p = req.params.pass
    UserModel.findOne({Username: u, Password: p})
    .select("_id Firstname Lastname").lean().exec(function(err,run) {
        if(err){
            console.log("Error" + err)
        }
        else{
            res.json(run)
        }
    })
})