const DB = require('../db/dbController');

module.exports = (props) => {
    const userId = props.msg.from.id.toString();
    const message = props.msg.text;
    const next = props.next;

    const msgFirst = async () => {
        let referral = message.split(' ')[1];
        if (!referral) referral = '';

        //add reward to refferal later

        let username = props.msg.from.username;
        if (!username) username = props.msg.from.first_name;

        const user = await DB.registration({ userId, username, ref: referral })

        if (!user.status) return props.sendMsg({userId, msg: `Welcome`});

        await props.setPanel({ userId, panel: 'PanelDefault' });


        props.sendMsg({userId, msg: `Enter your name:`});
        props.setWait();
    }

    const msgSecond = async () => {
        const username = message;
        await DB.username({ username, userId });


        props.sendMsg({userId, msg: `You logged as : ${username}`});
        props.delWait();
    }



    !next ? msgFirst() : msgSecond();
}