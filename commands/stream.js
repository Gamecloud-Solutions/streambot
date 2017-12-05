exports.run = Stream();

function Stream(){
    return(client, message, args) => {
        const fs = require('fs');
        let user = JSON.parse(fs.readFileSync('./users.json'));
        const config = require("../config.json");       
        args = message.content.slice(config.prefix.length).trim().split(/ +/g);        
        const command = args.shift().toLowerCase();

        if(!user[message.author.id]) {
            // Create a new one
            user[message.author.id] = {
                "username": "jaxcoder",
                "streamCount": 1,
                "urls": {
                    "url": "www.stream.com/jaxcoder",
                    "date": new Date().toString()
                }
                
            }
        }else{
            var theUser = user[message.author.id];
            // update the user stream profile
            user[message.author.id] = {
                "username": "jaxcoder",
                "streamCount": 1,
                "urls": {
                    "url": "www.stream.com/jaxcoder",
                    "date": new Date().toString()
                }
                
        }

        
        fs.writeFile('./users.json', JSON.stringify(user), err => {
            if(err)
                console.error(err);
        });

        message.reply('Now streaming at ' + args[0])
            .then(msg => console.log(msg.author + ' started streaming at ' + args[0]))
            .catch(console.err);
    };
};

