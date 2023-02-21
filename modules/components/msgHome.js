module.exports = async (props) => {
    const userId = props.msg.from.id.toString();

    await props.setPanel({ userId, panel: 'PanelDefault' });
    props.sendMsg({ userId, msg: 'Back...' })
}