/**
 * @typedef { import('@types/express').Application } ExpressApp
*/


/**
 * @type {ExpressApp}
*/
let app

// This code should have type autocompletion
app.get("/test", (req, res) => {
    res.send({})
})