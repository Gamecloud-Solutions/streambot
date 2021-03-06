const Discord = require("discord.js");
var Logger = require("./Logger.js");
const client = new Discord.Client({ 
    diasbleEveryone: true,
    messageCacheMaxSize: 500,
    messageSweepInterval: 60 
});
const fs = require("fs");
const config = require("./config.json");

let prefix = config.prefix; //"!";
let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));

client.on("ready", () => {
    console.log("Streambot running!");
});

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        // super-secret recipe to call events with all their proper arguments *after* the `client` var.
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

client.on("message", ResponseMessage());

client.login(config.token);

function ResponseMessage() {
    return message => {
        if (message.author.bot)
            return;
        if (message.content.indexOf(config.prefix) !== 0)
            return;
        // This is the best way to define args. Trust me.
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        // The list of if/else is replaced with those simple 2 lines:
        try {
            let commandFile = require(`./commands/${command}.js`);
            
            commandFile.run(client, message, args);
        }
        catch (err) {
            // Removed console.err so the bot would keep running and notify user and log
            //Logger.LogCommandError(command, message.author);
            console.log('The user entered ' + command + ', this command does not exist.');
            message.reply('command does not exist: ' + command);
        }
    };
}
