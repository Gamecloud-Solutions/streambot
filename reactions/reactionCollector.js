
exports.run = ReactionCollector();

function ReactionCollector(){
    return(client, message, args) => {


    // Create a reaction collector
    const collector = message.createReactionCollector(
        (reaction, user) => reaction.emoji.name === '👌' && user.id === 'someID',
        { time: 15000 }
    );
    collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
    collector.on('end', collected => console.log(`Collected ${collected.size} items`));



    }
}