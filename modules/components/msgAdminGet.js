const DB = require('../db/dbController');

module.exports = (props) => {
    const userId = props.msg.from.id.toString();
    const message = props.msg.text;
    const next = props.next;

    const msgFirst = async () => {

        if (await DB.adminExist()) return;

        props.sendMsg({ userId, msg: `Enter secret key:` });
        props.setWait();
    }

    const msgSecond = async () => {

        if (message !== "secret key") {
            props.sendMsg({ userId, msg: `Bad key!` });
            return props.delWait();
        }

        await DB.adminAdd({ userId });
        
        await props.setPanel({ userId, panel: 'PanelDefault' });

        props.sendMsg({ userId, msg: `Added role 'ADMIN'` });
        props.delWait();
    }

    !next ? msgFirst() : msgSecond();
}