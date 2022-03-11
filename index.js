const mc = require('minecraft-protocol');
var client = mc.createClient({
  host: "kaboom.pw",
  port: 25565,
  username: "BotTest5678",
});

//client.write('chat', {message: "hello world"});
client.on('login',function(){
  client.write('chat', {message: "hello world"});
});
