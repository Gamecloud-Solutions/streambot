exports.run = (client) => {
    console.log(`StreamBot Ready!
        Channels: ${client.channels.size} channels.
        Servers: ${client.guilds.size}
        Users: ${client.users.size}`);
}