/**
 * @typedef { import('@types/express').Application } ExpressApp
*/


/**
 * @type {ExpressApp}
*/
let _app

module.exports = function initApp(app) {
    _app = app

    // This code should have type autocompletion
    _app.get("/test", (req, res) => {
        res.send({})
    })
}