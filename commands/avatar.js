exports.run = Avatar()

function Avatar(){
    return(client, message, args) => {


        message.channel.send(message.author.avatarURL).catch(console.error);
    }
}