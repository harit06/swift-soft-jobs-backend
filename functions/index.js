const functions = require("firebase-functions")
const admin = require("firebase-admin")

const express = require("express")

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

if (!admin.apps.length) {
  admin.initializeApp()
}

// https://github.com/expressjs/express/blob/master/examples/route-middleware/index.js
exports.app = functions.https.onRequest(app)

const jobsController = require("./routes/JobsController")

app.use("/jobs", jobsController)
