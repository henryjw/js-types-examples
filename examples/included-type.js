const express = require('express')

const { response } = express

const app = express()

sendResponse(app)


/**
 * @param {response} res
 * @param {object} body
 */
function sendResponse(res, body) {
    // res properties should be auto-completed
    res.send(body)
}
