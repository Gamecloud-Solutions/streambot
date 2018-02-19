exports.run = Rules();

function Rules(){
    return (client, message, args) => {


        message.reply(`Streambot for Discord Rules: 
                        1. No Sexual Images.`)
            .then(console.log('user requested rules'))
            .catch(console.log(err));
    }
}