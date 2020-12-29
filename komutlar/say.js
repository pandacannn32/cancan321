const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let üyesayi = message.guild.memberCount;
  let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
  let kullanıcılar = üyesayi - botlar;
  let aktif = message.guild.members.cache.filter(
    m => m.user.presence.status !== "offline"
  ).size;

  let url = message.guild.iconURL(".jpg", ".gif");

  const numbers = [
    `<a:canmor0:778924522833051648>`,
    `<a:canmor1:778924523164008458>`,
    `<a:canmor2:778924522547445772>`,
    `<a:canmor3:778924522984046592>`,
    `<a:canmor4:778924522854023228>`,
    `<a:canmor5:778924522824400946>`,
    `<a:canmor6:778924522631856159>`,
    `<a:canmor7:778924522928734209>`,
    `<a:canmor8:778924522941972481>`,
    `<a:canmor9:778924523100569620>`
  ];
  
    function numberToEmojis(number) {
    let finalString = " ";
    String(number)
      .split("")
      .forEach(number => {
        finalString += "" + numbers[Number(number)];
      });
    return finalString;
  }

var toplamboost = message.guild.premiumSubscriptionCount.toString().replace(/ /g, " ") 
var ts = toplamboost.match(/([0-9])/g) 
toplamboost = toplamboost.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
toplamboost = toplamboost.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:canmor0:778924522833051648>`,
    '1': `<a:canmor1:778924523164008458>`,
    '2': `<a:canmor2:778924522547445772>`,
    '3': `<a:canmor3:778924522984046592>`,
    '4': `<a:canmor4:778924522854023228>`,                       
    '5': `<a:canmor5:778924522824400946>`,
    '6': `<a:canmor6:778924522631856159>`,
    '7': `<a:canmor7:778924522928734209>`,
    '8': `<a:canmor8:778924522941972481>`,
    '9': `<a:canmor9:778924523100569620>`}[d];
 }) 
}

   const s = message.guild.members.cache.filter(m => m.user.bot);
  var botsay = s.size.toString().replace(/ /g, " ") 
var ts = botsay.match(/([0-9])/g) 
seskanal = botsay.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
botsay = botsay.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:canmor0:778924522833051648>`,
    '1': `<a:canmor1:778924523164008458>`,
    '2': `<a:canmor2:778924522547445772>`,
    '3': `<a:canmor3:778924522984046592>`,
    '4': `<a:canmor4:778924522854023228>`,                       
    '5': `<a:canmor5:778924522824400946>`,
    '6': `<a:canmor6:778924522631856159>`,
    '7': `<a:canmor7:778924522928734209>`,
    '8': `<a:canmor8:778924522941972481>`,
    '9': `<a:canmor9:778924523100569620>`}[d];
 }) 
}

var slsl = message.guild.premiumTier.toString().replace(/ /g, " ") 
var ts = slsl.match(/([0-9])/g) 
slsl = slsl.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
slsl = slsl.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:canmor0:778924522833051648>`,
    '1': `<a:canmor1:778924523164008458>`,
    '2': `<a:canmor2:778924522547445772>`,
    '3': `<a:canmor3:778924522984046592>`,
    '4': `<a:canmor4:778924522854023228>`,                       
    '5': `<a:canmor5:778924522824400946>`,
    '6': `<a:canmor6:778924522631856159>`,
    '7': `<a:canmor7:778924522928734209>`,
    '8': `<a:canmor8:778924522941972481>`,
    '9': `<a:canmor9:778924523100569620>`}[d];
 }) 
}

var cancan = message.guild.members.cache.filter(m =>(new Date().getTime()- m.joinedTimestamp) < 86400000).size.toString().replace(/ /g, " ")
var ts = cancan.match(/([0-9])/g) 
cancan = cancan.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
cancan = cancan.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:canmor0:778924522833051648>`,
    '1': `<a:canmor1:778924523164008458>`,
    '2': `<a:canmor2:778924522547445772>`,
    '3': `<a:canmor3:778924522984046592>`,
    '4': `<a:canmor4:778924522854023228>`,                       
    '5': `<a:canmor5:778924522824400946>`,
    '6': `<a:canmor6:778924522631856159>`,
    '7': `<a:canmor7:778924522928734209>`,
    '8': `<a:canmor8:778924522941972481>`,
    '9': `<a:canmor9:778924523100569620>`}[d];
 }) 
}

var cancan1 = message.guild.members.cache.filter(m =>(new Date().getTime()- m.joinedTimestamp) < 3600000).size.toString().replace(/ /g, " ")
var ts = cancan1.match(/([0-9])/g) 
cancan1 = cancan1.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
cancan1 = cancan1.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:canmor0:778924522833051648>`,
    '1': `<a:canmor1:778924523164008458>`,
    '2': `<a:canmor2:778924522547445772>`,
    '3': `<a:canmor3:778924522984046592>`,
    '4': `<a:canmor4:778924522854023228>`,                       
    '5': `<a:canmor5:778924522824400946>`,
    '6': `<a:canmor6:778924522631856159>`,
    '7': `<a:canmor7:778924522928734209>`,
    '8': `<a:canmor8:778924522941972481>`,
    '9': `<a:canmor9:778924523100569620>`}[d];
 }) 
}

var cancan2 = message.guild.members.cache.filter(m =>(new Date().getTime()- m.joinedTimestamp) < 604800017).size.toString().replace(/ /g, " ")
var ts = cancan2.match(/([0-9])/g) 
cancan2 = cancan2.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
cancan2 = cancan2.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:canmor0:778924522833051648>`,
    '1': `<a:canmor1:778924523164008458>`,
    '2': `<a:canmor2:778924522547445772>`,
    '3': `<a:canmor3:778924522984046592>`,
    '4': `<a:canmor4:778924522854023228>`,                       
    '5': `<a:canmor5:778924522824400946>`,
    '6': `<a:canmor6:778924522631856159>`,
    '7': `<a:canmor7:778924522928734209>`,
    '8': `<a:canmor8:778924522941972481>`,
    '9': `<a:canmor9:778924523100569620>`}[d];
 }) 
}

var cancan3 = message.guild.members.cache.filter(m =>(new Date().getTime()- m.joinedTimestamp) < 2629800000).size.toString().replace(/ /g, " ")
var ts = cancan3.match(/([0-9])/g) 
cancan3 = cancan3.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
cancan3 = cancan3.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:canmor0:778924522833051648>`,
    '1': `<a:canmor1:778924523164008458>`,
    '2': `<a:canmor2:778924522547445772>`,
    '3': `<a:canmor3:778924522984046592>`,
    '4': `<a:canmor4:778924522854023228>`,                       
    '5': `<a:canmor5:778924522824400946>`,
    '6': `<a:canmor6:778924522631856159>`,
    '7': `<a:canmor7:778924522928734209>`,
    '8': `<a:canmor8:778924522941972481>`,
    '9': `<a:canmor9:778924523100569620>`}[d];
 }) 
}

  const amk = new Discord.MessageEmbed()
  return message.channel
    .send(
      new Discord.MessageEmbed()
        .setAuthor(
          "RANDOM BOT",
          message.guild.iconURL,
          "https://discord.gg/database"
        )
        .setColor("RANDOM")
        .setDescription(
          `**__*Sunucuda Bulunan Toplam Üye sayısı*__**:${numberToEmojis(
            kullanıcılar
          )}\n**__*Sunucuda Bulunan Aktif Üye Sayısı*__**:${numberToEmojis(
            aktif
          )}
		  **__*Sunucuda Bulunan Bot Sayısı:*__**${botsay}
		  **----------------------------------------------------**
		  **__*Sunucu Level Sayısı:*__**${slsl}/<a:canmor3:778924522984046592>
		  **__*Sunucu Toplam Takviye Sayısı:*__**${toplamboost}
		  **----------------------------------------------------**
		  **__*Sunucuya 1 Saatte Gelen Kişi Sayısı:*__**${cancan1}
		   **__*Sunucuya 1 Günde Gelen Kişi Sayısı:*__**${cancan}
		   **__*Sunucuya 1 Haftada Gelen Kişi Sayısı:*__**${cancan2}
		   **__*Sunucuya 1 Ayda Gelen Kişi Sayısı:*__**${cancan3}
		  `)

      .setThumbnail(
          "https://media.discordapp.net/attachments/608711473652563968/662778528168935434/megancm.gif?width=253&height=253"
        )
		.setImage("https://i.hizliresim.com/ZK6WZt.gif")
        .setFooter(
          `${message.author.tag} tarafından istendi`,
          message.author.avatarURL({dynamic: true})
          
        )
    )

    .then(m => m.delete(30000));
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tagsay", "sesli"],
  permLevel: 0
};

module.exports.help = {
  name: "say",
  description: "Üye Durumlarını ve sunucudaki üye sayısını gösterir",
  usage: "üyedurum"
};