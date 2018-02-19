exports.run = (client, member) => {
    const defaultChannel = member.guild.channels.find(c => c.permissionsFor(member.guild.me).has("SEND_MESSAGES"));    
    defaultChannel.send(`Welcome ${member.user} to the Streambot server. Enter sb!cmd for a list of commands.`)
        .catch(console.error);
}
