exports.run = Buy();

function Buy() {
    return (client, message, args) => {
        

        message.reply('You bought: ')
        .then(console.log(message.author.id + ' bought: '))
        .catch(console.log('Error purchasing: '));
    }
}