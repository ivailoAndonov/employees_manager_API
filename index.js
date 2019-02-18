const express = require('express')
const app = express()

const mongoose = require('mongoose')
const consola = require('consola')

const middleware = require('./middleware/middleware')
const routes = require('./routes/index')

// Constants
const PORT = require('./config/mainConfig').PORT
const HOST = require('./config/mainConfig').HOST
const MONGO_DB_CONNECTION_STRING = require('./config/dbConfig').MONGO_DB_CONNECTION_STRING

async function start() {

    // Set middleware
    middleware(app)

    // Connect to mongoDB
    mongoose.connect(MONGO_DB_CONNECTION_STRING, { useCreateIndex: true, useNewUrlParser: true })
        .then(() => consola.info('MongoDB Connected'))
        .catch(err => consola.error(new Error(err)))

    app.use(routes)

    // Listen the server
    app.listen(PORT, () => {
        consola.ready({
            message: `Server listening on http://${HOST}:${PORT}`,
            badge: true
        })
    })
}
start()
