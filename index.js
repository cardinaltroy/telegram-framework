require('dotenv').config()

const TelegramAPI = require('node-telegram-bot-api');
const bot = new TelegramAPI(process.env.app_token, { polling: true });
const registerUserHandlers = require('./modules/userHandler');
const sequelize = require('./modules/db');
const models = require('./modules/db/dbModels');

const App_start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (e) {
        console.log(e);
    }

    bot.on('message', async msg => registerUserHandlers(msg, bot));

    console.log('[bot] Bot is running')
}

App_start();