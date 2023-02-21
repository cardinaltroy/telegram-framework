module.exports = async (props) => {
    const userId = props.msg.from.id.toString();

    await props.setPanel({ userId, panel: 'PanelMenu' });
    props.sendMsg({ userId, msg: 'Menu...' })
}