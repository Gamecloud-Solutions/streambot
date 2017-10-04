exports.run = Emoji();

function Emoji(){
    return(message, client, args, guild) => {
        //const emoji = guild.emojis.first();

        // Create a new emoji from a url
        guild.createEmoji('https://i.imgur.com/w3duR07.png', 'rip')
        .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
        .catch(console.error);

        // Create a new emoji from a file on your computer
        guild.createEmoji('./memes/banana.png', 'banana')
        .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
        .catch(console.error);


        message.send('Hello ${emoji}')
    }
}