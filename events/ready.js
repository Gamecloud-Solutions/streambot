exports.run = (client) => {
    console.log(`StreamBot Ready in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
}