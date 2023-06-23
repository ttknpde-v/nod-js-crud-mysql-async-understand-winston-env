class ServiceRestModules {
    #express
    #bodyParser

    constructor() {
        this.#express = require('express')
        this.#bodyParser = require('body-parser')
    }


    get express() {
        return this.#express
    }

    get bodyParser() {
        return this.#bodyParser
    }

}

module.exports = ServiceRestModules

// test read .env file
/*
    const path =require('path')
    const logger = require('../log/Logging')
    logger.silly('test log before require dotenv module')
    logger.silly(`Your port is ${process.env.PORT}`)
    const dotenv = require('dotenv');
    dotenv.config({path:path.join(__filename,'../../env/.env')}) // you should set path
    logger.silly('test log after require dotenv module')
    logger.silly(`Your port is ${process.env.PORT}`)
*/
