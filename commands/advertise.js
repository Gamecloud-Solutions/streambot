exports.run = Advertise();
function Advertise() {
    return(client, message, args) => {
    const Discord = require("discord.js");
    const config = require("../config.json");
    
    args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    
    const command = args.shift().toLowerCase();
   
    const embed = new Discord.RichEmbed()
        // Set the Title, takes one argument
        .setTitle(args[0])
        // Link for Author 
        .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
        // Set the Author
        .setAuthor(args[1], message.author.avatarURL)//"https://i.imgur.com/lm8s41J.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor('#00AE86')
        .setDescription("This is the main body of text, it can hold 2048 characters.")
        
        .setImage("http://i.imgur.com/yVpymuV.png")
        .setThumbnail("http://i.imgur.com/p2qNFag.png")
        /*
         * Takes a Date object, defaults to current date.
         */
        

        .addField("This is a field title, it can hold 256 characters",
            "This is a field value, it can hold 2048 characters.", true)
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
        
        .addField("Inline Field", "They can also be inline.", true)
        */ 
        /*
         * Blank field, useful to create some space.
        
        .addBlankField(true)
        .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);      
        */

        .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
        .setTimestamp()
        

    message.channel.send({ embed }).catch(console.error);
    }   
}