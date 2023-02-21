module.exports = (props) => {
    const userId = props.msg.from.id.toString();
    const message = props.msg.text;
    const next = props.next;

    const msgFirst = async() =>{

        
        /* Any code here */

        props.sendMsg({userId, msg: `Its simple demo command for template. Just enter any text:`});
        props.setWait();
    }

    const msgSecond = ()=>{


        /* Any code here */


        props.sendMsg({userId, msg: `Your text is: ${message}`});
        props.delWait();
    }

    !next ? msgFirst() : msgSecond();
}