var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "MzU3MzAwODcwNTE1MjYxNDQw.DJ7EEg.dmeE_ZVv5qmfglPe-_j-EStN0Lw",
    autorun: true

});

const prefix = "?";

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === prefix + "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});