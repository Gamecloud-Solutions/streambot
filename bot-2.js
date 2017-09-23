var Discordie = require("discordie");
var Events = Discordie.Events;

var client = new Discordie({
    // Maximum amount of messages to store in channel cache.
    // Decreasing this will reduce memory usage over time.
    // With low values (below 50) chances of message invalidation increase:
    // accessing message properties (ex. `e.message.channel`) in callbacks
    // of long running tasks (ex. HTTP requests) becomes unsafe.
    messageCacheLimit: 1000, // < default

    // Guild sharding:
    // (Note that this is only intended to be used by large bots.)
    // 'shardId'     is a number starting at 0 and less than 'shardCount'
    // 'shardCount'  must be a number greater than 1
    shardId: 0,
    shardCount: 2, // sharding is disabled by default

    // Gateway auto-reconnect:
    // If enabled, 'DISCONNECTED' event will also contain properties
    // 'autoReconnect'  boolean, set to true
    // 'delay'          delay in milliseconds until next connect attempt
    autoReconnect: false, // < default
});

const prefix = "?";
client.connect({ token: "MzU3MzAwODcwNTE1MjYxNDQw.DJ7EEg.dmeE_ZVv5qmfglPe-_j-EStN0Lw" });

client.Dispatcher.on(Events.GATEWAY_READY, e => {
    console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    if (e.message.content == prefix + "ping")
        e.message.channel.sendMessage("pong");
});