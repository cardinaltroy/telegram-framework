# Menu
- [About](#framework)
- [Usage](#usage)
- [Props](#props)

# <a name="framework">About</a> 
Just NodeJS framework for creating telegram bot with SQLite (or u can change dialect in sequelize). What he can?



- registration
- user cabinet
    - balance
    - other users info
    - referal system
- roles
    - user
    - admin
- admin panel:
    - ban/unban user?
    - add/remove balance?
    - add/remove admins?
    - check users profile?
- multilevel menu

# <a name="usage">Usage</a>
- npm run dev

For add new command, create in dir "components" new file .js with name your command. ANd register this in userHandler. 

For example msgTest.js

Inside file:

```js
module.exports = (props) => {
    const userId = props.msg.from.id.toString();
    const message = props.msg.text;
    const next = props.next;

    const msgFirst = () =>{

        
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
```  

# <a name="props">Props</a>

```js
{ msg, bot, next, setWait, delWait, sendMsg, setPanel }
```

msg - json - all data from user message

bot - access to all methods like bot.sendMessage() and other

next - (true/false) - bot waiting user answer or not. (only read)

setWait - function( {userId, message} ) - make the bot wait user answer

delWait - function( {userId} ) - remove pending

sendMsg - function( {userId, msg} ) - send message to user

setPanel - async function ( {userId, panel} ) - set menu panel for user
