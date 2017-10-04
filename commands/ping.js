exports.run = Ping();

function Ping() {
    return (client, message, args) => {
        const Discord = require("discord.js");
        const config = require("../config.json");       
        args = message.content.slice(config.prefix.length).trim().split(/ +/g);        
        const command = args.shift().toLowerCase();
       

        message.channel.send("Pong!").catch(console.error);
    }
}