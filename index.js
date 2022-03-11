const mc = require('minecraft-protocol');
var client = mc.createClient({
  host: "kaboom.pw",
  port: 80,
  username: "BotTest5678",
});

client.write('chat', {message: "hello world"});
