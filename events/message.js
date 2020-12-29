const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
module.exports = message => {
	const talkedRecently = new Set();
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  
  if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else {
      message.channel.send(`Komutlarımda \`\`${command}\`\` adında bir komut bulamadım! Komut listesine bakmak için: \`\`${ayarlar.prefix}yardım\`\``)
    }
  }
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  
  if (db.fetch(`cokaradalistere_${message.author.id}`)) 
  return message.channel.send("Olamaz sen botun karalistesinde bulunuyorsun botu kullanamazsın.https://i.hizliresim.com/eBTPqz.png")
  
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};