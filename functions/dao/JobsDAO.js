const { getFirestore } = require("firebase-admin/firestore")
const { FIRESTORE_DB } = require("../util/Constants")

const db = getFirestore()

const get_latest_jobs_paginated = async (lastDocID) => {
  let query = db
    .collection(FIRESTORE_DB.COLLECTION_JOBS)
    .orderBy(FIRESTORE_DB.COLLECTION_JOBS_ATTR_ID, "desc")

  if (lastDocID > 0) {
    query = query.startAfter(lastDocID).limit(FIRESTORE_DB.PAGE_LIMIT)
  } else {
    query = query.limit(FIRESTORE_DB.PAGE_LIMIT)
  }

  return await query.get()
}

module.exports = {
  get_latest_jobs_paginated,
}
