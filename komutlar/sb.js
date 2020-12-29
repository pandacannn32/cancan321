const Discord = require('discord.js');


exports.run = async (client, message, args) => {
    let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
   const ss = message.guild.channels.cache.filter(c => c.type === 'category');
  var kate = ss.size.toString().replace(/ /g, " ") 
var ts = kate.match(/([0-9])/g) 
kate = kate.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
kate = kate.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:can0:767130580973781032>`,
    '1': `<a:can1:767130579166429185>`,
    '2': `<a:can2:767130576825090068>`,
    '3': `<a:can3:767130575617261568>`,
    '4': `<a:can4:767130573524959252>`,                       
    '5': `<a:can5:767130571260297218>`,
    '6': `<a:can6:767130570269786133>`,
    '7': `<a:can7:767130567749402675>`,
    '8': `<a:can8:767130565270831136>`,
    '9': `<a:can9:767130562833940520>`}[d];
 }) 
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var metinkanal = message.guild.channels.cache.size.toString().replace(/ /g, " ") 
var ts = metinkanal.match(/([0-9])/g) 
metinkanal = metinkanal.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
metinkanal = metinkanal.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:can0:767130580973781032>`,
    '1': `<a:can1:767130579166429185>`,
    '2': `<a:can2:767130576825090068>`,
    '3': `<a:can3:767130575617261568>`,
    '4': `<a:can4:767130573524959252>`,                       
    '5': `<a:can5:767130571260297218>`,
    '6': `<a:can6:767130570269786133>`,
    '7': `<a:can7:767130567749402675>`,
    '8': `<a:can8:767130565270831136>`,
    '9': `<a:can9:767130562833940520>`}[d];
 }) 
}
  
  
  
  
  
   const s = message.guild.channels.cache.filter(c => c.type === 'voice');
  var seskanal = s.size.toString().replace(/ /g, " ") 
var ts = seskanal.match(/([0-9])/g) 
seskanal = seskanal.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
seskanal = seskanal.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:can0:767130580973781032>`,
    '1': `<a:can1:767130579166429185>`,
    '2': `<a:can2:767130576825090068>`,
    '3': `<a:can3:767130575617261568>`,
    '4': `<a:can4:767130573524959252>`,                       
    '5': `<a:can5:767130571260297218>`,
    '6': `<a:can6:767130570269786133>`,
    '7': `<a:can7:767130567749402675>`,
    '8': `<a:can8:767130565270831136>`,
    '9': `<a:can9:767130562833940520>`}[d];
 }) 
}
  
    let count = 0 
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

    var sessayı = count.toString().replace(/ /g, " ") 
var ts = sessayı.match(/([0-9])/g) 
sessayı = sessayı.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
sessayı = sessayı.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:can0:767130580973781032>`,
    '1': `<a:can1:767130579166429185>`,
    '2': `<a:can2:767130576825090068>`,
    '3': `<a:can3:767130575617261568>`,
    '4': `<a:can4:767130573524959252>`,                       
    '5': `<a:can5:767130571260297218>`,
    '6': `<a:can6:767130570269786133>`,
    '7': `<a:can7:767130567749402675>`,
    '8': `<a:can8:767130565270831136>`,
    '9': `<a:can9:767130562833940520>`}[d];
 }) 
}
  
  
  

  var toplamsayı = message.guild.members.cache.size.toString().replace(/ /g, " ") 
var ts = toplamsayı.match(/([0-9])/g) 
toplamsayı = toplamsayı.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
toplamsayı = toplamsayı.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:can0:767130580973781032>`,
    '1': `<a:can1:767130579166429185>`,
    '2': `<a:can2:767130576825090068>`,
    '3': `<a:can3:767130575617261568>`,
    '4': `<a:can4:767130573524959252>`,                       
    '5': `<a:can5:767130571260297218>`,
    '6': `<a:can6:767130570269786133>`,
    '7': `<a:can7:767130567749402675>`,
    '8': `<a:can8:767130565270831136>`,
    '9': `<a:can9:767130562833940520>`}[d];
 }) 
}
var toplamboost = message.guild.premiumSubscriptionCount.toString().replace(/ /g, " ") 
var ts = toplamboost.match(/([0-9])/g) 
toplamboost = toplamboost.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
toplamboost = toplamboost.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:can0:767130580973781032>`,
    '1': `<a:can1:767130579166429185>`,
    '2': `<a:can2:767130576825090068>`,
    '3': `<a:can3:767130575617261568>`,
    '4': `<a:can4:767130573524959252>`,                       
    '5': `<a:can5:767130571260297218>`,
    '6': `<a:can6:767130570269786133>`,
    '7': `<a:can7:767130567749402675>`,
    '8': `<a:can8:767130565270831136>`,
    '9': `<a:can9:767130562833940520>`}[d];
 }) 
}
let bölge = {
            "us-central": "Amerika :flag_us:",
            "us-east": "Doğu Amerika :flag_us:",
            "us-south": "Güney Amerika :flag_us:",
            "us-west": "Batı Amerika :flag_us:",
            "eu-west": "Batı Avrupa :flag_eu:",
            "eu-central": "Avrupa :flag_eu:",
            "singapore": "Singapur :flag_sg:",
            "london": "Londra :flag_gb:",
            "japan": "Japonya :flag_jp:",
            "russia": "Rusya :flag_ru:",
            "hongkong": "Hong Kong :flag_hk:",
            "brazil": "Brezilya :flag_br:",
            "singapore": "Singapur :flag_sg:",
            "sydney": "Sidney :flag_au:",
            "southafrica": "Güney Afrika :flag_za:",
            "europe": "Avrupa :flag_eu:"
    }
if(bölge) {
  
const oç = new Discord.MessageEmbed()
.setTitle(`${message.guild.name} Adlı Sunucunun Bilgileri.`)
.setDescription(`**Sunucunun Kurucusu: <@${message.guild.owner.id}> \n Sunucu Sahibinin İD'Si: ${message.guild.owner.id} \n\n\n :bust_in_silhouette: Sunucudaki Kişi Sayısı: ${toplamsayı} \n  Seslideki Kişi Sayısı: ${sessayı} \n  Sesli Kanal Sayısı: ${seskanal} \n  Toplam Kanal Sayısı: ${metinkanal} \n  Toplam Kategori Sayısı: ${kate} \n :earth_asia: Sunucunun Bölgesi: ${bölge[message.guild.region]} \n  Sunucu Takviye(Boost) Seviyesi Sayısı: ${message.guild.premiumTier}/3 \n  Sunucu Takive(Boost) Sayısı: ${toplamboost} \n\n\n  Çevrimiçi : ${message.guild.members.cache.filter(o => o.presence.status === 'online').size} \n Rahatsız Etmeyin : ${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size} \n Boşta: ${message.guild.members.cache.filter(i => i.presence.status === 'idle').size} \n Görünmez/Çevrimdışı : ${message.guild.members.cache.filter(off => off.presence.status === 'offline').size} \n Botlar : ${botlar}**`)
  message.channel.send(oç)
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-bilgi","sb"],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: "Bot Sahibine Özel Komut."
};