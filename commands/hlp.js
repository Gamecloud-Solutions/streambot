exports.run = Hlp();

function Hlp(){
    return(client, massage, args) => {


        message.reply('Help is on its way, check your direct messages...')
        .then(console.log('user requested help'))
        .catch(console.log(err))
    }
}