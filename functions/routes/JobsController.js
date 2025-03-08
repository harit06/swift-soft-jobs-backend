const express = require("express")
const jobsService = require("../service/JobsService")
const functions = require("firebase-functions")
const constants = require("../util/Constants")

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    res.json(
      await jobsService.get_latest_jobs_paginated(
        Number(req.query.lastDocId) || 0
      )
    )
  } catch (error) {
    functions.logger.error(error)
    res
      .status(constants.STATUS_CODES.SERCER_ERROR)
      .json({ error: "Server error" })
  }
})

module.exports = router
