const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();

//【Gif Sky Random Bots】Code★Botlist★Uptime AİTDİR!!!



var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

//【Gif Sky Random Bots】Code★Botlist★Uptime AİTDİR!!!


client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
//【Gif Sky Random Bots】Code★Botlist★Uptime AİTDİR!!!



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// })//【Gif Sky Random Bots】Code★Botlist★Uptime AİTDİR!!!;

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);



client.on('guildCreate', async guild => {
  const embed2 = new Discord.MessageEmbed()
  .setTitle('Yeni Sunucu')
  .setDescription('Sunucu Adı: ' + guild.name)
  .addField('Kişi Sayısı:', guild.memberCount)
  .addField('Sunucu Sahibi', guild.owner)
  .setThumbnail(guild.iconURL)
  const channel = client.channels.cache.find(ch => ch.id === '775356154145800193')
  channel.send(embed2)
})

client.on('guildDelete', async guild => {
  const embed2 = new Discord.MessageEmbed()
  .setTitle('Bir Sunucudan Çıktım')
  .setDescription('Sunucu Adı: ' + guild.name)
  .addField('Kişi Sayısı:', guild.memberCount)
  .addField('Sunucu Sahibi:', guild.owner)
  .setThumbnail(guild.iconURL)
  const channel = client.channels.cache.find(ch => ch.id === '775356154145800193')
  channel.send(embed2)
})


//【Gif Sky Random Bots】Code★Botlist★Uptime AİTDİR!!!
//【Gif Sky Random Bots】Code★Botlist★Uptime AİTDİR!!!


//【Gif Sky Random Bots】Code★Botlist★Uptime AİTDİR!!!



client.on("message", message => {
  if (message.content.toLowerCase() === "g!emojiid") {
    if(message.channel.id !== '774672187977367564') return message.reply('Komut Sadece <#774672187977367564> Kullanılır.')
    message.channel.send(
      message.guild.emojis.cache.size === 0
        ? "Emoji yok"
        : message.guild.emojis.cache.map(e => `${e.id} | ${e.toString()}`).join("\n"),
      { code: "xl", split: true }
    );
  }
});

client.on("guildCreate", async guild => {
  const biggz = [
    "Bot sunucuna eklendi.Tebrikler dostum.",
    "Bu bot **! <@668825686470819860> ** tarafından geliştirilmektedir.",
    'iyi günlerde kullan..'
  ];
  guild.owner.send(biggz);
  console.log(`LOG: ${guild.name}. sunucuya katıldım!`);
});


client.on("message", msg => {
	if(msg.author.bot) return;
	const westrabumbe = new Discord.MessageEmbed()
	.setDescription(`Prefixim: **g!**\n Yardım için: **g!yardım**`)
  if (msg.content.includes(`<@${client.user.id}>`) || msg.content.includes(`<@!${client.user.id}>`)) {
    msg.channel.send(westrabumbe);
  }
})

const data = require('quick.db');
const logs = require('discord-logs');
logs(client);
client.on('guildMemberNicknameUpdate', async (member, oldNickname, newNickname) => require('quick.db').push(`harmanim.baba.nerdee.carsafim.${member.user.id}.${member.guild.id}`, { isimler: `${oldNickname ? oldNickname : member.user.username} -> ${newNickname ? newNickname : member.user.username}` }));

client.on("ready", async () => {
  let csdb = require("quick.db")
  setInterval(() => {
    
  client.guilds.cache.map(cs => {
    
  let csv = csdb.get("sunucutanit."+cs.id)
    if(csv){
      
      let time = Date.now() - csv.zaman
      let sure = csv.sure
      
      if(time >= sure){
        db.delete("sunucutanit."+cs.id)
      }
    }
  })
  }, 300000)
}) 

client.on('message', message => {
  if (message.content === 'g!çıkarlanoc') {
    if (message.author.id !== '668825686470819860') return message.channel.send('Vay Çakal Sahibimin Komutunu Kulanıyon dava Açacam Bekle sen :D ')
    client.guilds.cache.forEach((item, i)  => {
    if (item.memberCount < 10) {
      item.leave()
    } else {
      return
    
    }
    });

}
})


 