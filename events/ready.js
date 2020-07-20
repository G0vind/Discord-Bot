module.exports = (client) => {
    console.log('Hello World!');
    client.user.setActivity('Basic Bot [_ping]', { type: 'LISTENING'}).catch(console.error);
}