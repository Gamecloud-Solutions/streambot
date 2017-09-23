const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");


let prefix = config.prefix; //"!";

client.on("ready", () => {
    console.log("Streambot Ready!");
});

client.on("message", (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // No command sent to bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    // Change prefix
    // Authorize Owner
    // if(message.author.id !== config.ownerID) {return;
    // if (message.content.startsWith(config.prefix + "prefix")) {
    //     // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
    //     let newPrefix = message.content.split(" ").slice(1, 2)[0];
    //     // change the configuration in memory
    //     config.prefix = newPrefix;

    //     // Now we have to save the file.
    //     fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
    // };
    // Test messages
    if (message.content.startsWith(prefix + "asl")) {
        let [age, sex, location] = args;
        message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
    } else
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    } else
    if (message.content.startsWith(prefix + "foo")) {
        message.channel.send("bar!");
    } else
    if (message.content.startsWith(prefix + "ilove")) {
        message.channel.send("Jennifer!");
    }

    // Basic general functions
    // else if (message.content.startsWith(prefix + "")) {
    //     massage.channel.send("");
    // }

    // Advanced general functions
    // else if (message.content.startsWith(prefix + "")) {
    //     massage.channel.send("");
    // }

    // Using command and args
    // const args = message.content.slice(prefix.length).trim().split(/ +/g);
    // const command = args.shift().toLowerCase();

    // if (command === "asl") {
    //     let [age, sex, location] = args;
    //     message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
    // }


});






client.login(config.token); //("MzU3MzAwODcwNTE1MjYxNDQw.DJ7EEg.dmeE_ZVv5qmfglPe-_j-EStN0Lw");