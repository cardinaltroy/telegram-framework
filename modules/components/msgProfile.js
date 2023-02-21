const DB = require('../db/dbController');

module.exports = async (props) => {
    const userId = props.msg.from.id.toString();

    const data = await DB.profile({ userId });
    if(!data) return props.sendMsg({ userId, msg: 'Try to use /start again!' });

    const { id, username, role, balance, createdAt } = data.dataValues;

    const profile = `
👤 NAME :   ${username}

🛠 ROLE :   ${role}
        
🆔 USER ID :   ${id}

💰 BALANCE :   ${balance}

🗓 REGISTERED :   ${createdAt}

______________________________

👥 Invite and get rewards:

https://t.me/troyHomeBot?start=${id} 
    `;
    

    props.sendMsg({ userId, msg: profile });
}

