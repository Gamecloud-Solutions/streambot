exports.run = Purge();

function Purge(){
    args = message.content.slice(config.prefix.length).trim().split(/ +/g);    
    const command = args.shift().toLowerCase();   
    return (client, message, args) => {
        if(command === `${prefix}purge`) {
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            message.delete();
            try {
                message.channel.bulkDelete(args[1]);
                message.channel.send(`I have deleted ${args[1]} messages`);
            } catch(e){
            message.reply(`this shouldn't ever happen ${e}`);
           }
       }
    }
}