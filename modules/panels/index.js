const DB = require('../db/dbController');

const panels = require('./panels');

const getPanel = async (props) => {
    const user = await DB.profile({ userId: props.userId });
    if(!user) return {}

    let role = user.dataValues.role.toString().toLowerCase();

    const current = panels[role + props.name] ? panels[role + props.name] : panels[role + 'PanelDefault'];

    return {
        reply_markup: JSON.stringify({
            keyboard: current,
            resize_keyboard: true,
            one_time_keyboard: false,
            force_reply: true,
        })
    }
}


const panelStore = new Map();

const set = async props => panelStore.set(props.userId, await getPanel({ name: props.panel, userId: props.userId }));
const get = props => panelStore.get(props.userId);


module.exports = { get, set }