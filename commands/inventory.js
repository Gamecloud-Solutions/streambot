exports.run = GetInventory();

function GetInventory() {
    return (client, message, args) => {
        const config = require("../config.json");       
        args = message.content.slice(config.prefix.length).trim().split(/ +/g);        
        const command = args.shift().toLowerCase();
       


        message.reply("Your inventory contains the following:")
        .then(msg => console.log(msg.author + ' requested inventory'))
        .catch(console.err);
    }
}