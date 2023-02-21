const localStore = require('./localStore');
const panels = require('./panels');

const msgTest = require('./components/msgTest');
const msgMenu = require('./components/msgMenu');
const msgHome = require('./components/msgHome');
const msgStart = require('./components/msgStart');
const msgProfile = require('./components/msgProfile'); 
const msgGetAdmin = require('./components/msgAdminGet');

module.exports = (msg, bot) => {
    const userId = msg.from.id.toString();
    const next = localStore.has({ userId });
    const message = next ? localStore.get({ userId }) : msg.text;

    const setWait = () => localStore.set({ userId, message });
    const delWait = () => localStore.del({ userId });
    const sendMsg = props => bot.sendMessage(props.userId, props.msg, panels.get({userId: props.userId}));
    const setPanel = async props => await panels.set({ userId: props.userId, panel: props.panel});

    const props = { msg, bot, next, setWait, delWait, sendMsg, setPanel };


    // Here is your commands
    if (message === "Test") msgTest(props);
    if (message === "GetAdmin") msgGetAdmin(props);

    if (message.includes("/start")) msgStart(props);
    if (message === "Profile") msgProfile(props);
    if (message === "Menu") msgMenu(props);
    if (message === "Home") msgHome(props);
}