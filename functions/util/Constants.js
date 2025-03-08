const STATUS_CODES = Object.freeze({
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERCER_ERROR: 500,
})

const FIRESTORE_DB = Object.freeze({
  PAGE_LIMIT: 2,
  COLLECTION_JOBS: "jobs",
  COLLECTION_JOBS_ATTR_ID: "jid",
})

module.exports = {
  STATUS_CODES,
  FIRESTORE_DB,
}
