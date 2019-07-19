/**
 * @typedef { import('@types/express').Application } ExpressApp
*/


const express = require('express')
const app = express()

addTestRoute(app)


/**
 * @param {ExpressApp} expressApp
 */
function addTestRoute(expressApp) {
    // `expressApp` properties should be auto-completed
    expressApp.get("/ping", (req, res) => {
        res.send({
            success: true
        })
    })
}
