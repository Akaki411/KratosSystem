require('dotenv').config()
const {VK} = require('vk-io')
const express = require('express')
const cors = require('cors')

//Modules
const router = require('./routes/router')
const database = require('./database/database')

//Middleware
const errorHandler = require('./middleware/error-handling-middleware')

//Handlers
const VKBot = new VK({token: process.env.VKToken})
const app = express()

//Loaders
const StartDB = async () =>
{
    return new Promise(async (resolve, reject) => {
        try
        {
            await database.authenticate().then(() => {
                console.log("База данных подключена.")
            })
            await database.sync().then(() => {
                console.log("База данных синхронизирована.")
            })
            return resolve()
        }
        catch (e)
        {
            console.log("Ошибка запуска базы данных: " + e.message)
            return reject()
        }
    })
}

const StartHTTPInterface = async () =>
{
    return new Promise((resolve, reject) => {
        try
        {
            app.use(cors())
            app.use(express.json())
            app.use('/api', router)
            app.use(errorHandler)
            app.listen(process.env.APP_PORT, () => {console.log("HTTP интерфейс запущен на порту " + process.env.APP_PORT)})
            return resolve()
        }
        catch (e)
        {
            console.log("HTTP интерфейс не смог запуститься из-за ошибки: " + e.message)
            return reject()
        }
    })
}

const StartVKBot = async () =>
{
    return new Promise((resolve) => {
        try
        {
            VKBot.updates.on('message', async(context) =>
            {
                console.log(context)
            })
            VKBot.updates.start().then(() => {
                console.log("ВК бот запущен")
                return resolve()
            }).catch()
        }
        catch (e)
        {
            console.log("ВК бот не смог запуститься из-за ошибки: " + e.message)
            return resolve()
        }
    })
}


//Loading
StartDB().then(() => StartHTTPInterface().then(() => StartVKBot()))