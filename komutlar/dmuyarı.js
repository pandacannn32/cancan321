const Discord = require('discord.js')
const request = require('request')

exports.run = async (client, message, args) => {
    if(!args[0]) return message.channel.send("Lütfen dizi adı girin.")
    request(`https://imdb.com ${args.join(" ")}`, function (error, response, body) {
        if (JSON.parse(body).hata) return message.channel.send('Hata: ' + JSON.parse(body).hata);
        var veri = JSON.parse(body)
        const embed = new Discord.RichEmbed()
            .addField("İsim", veri.isim)
            .addField("Açıklama", veri.açıklama)
            .addField("Süre", veri.süre)
            .addField("Kategoriler", veri.kategoriler.join(", "))
            .addField("Ülke", veri.ülke)
            .addField("Çıkış Yılı", veri.yıl)
            .addField("Sezon Sayısı", veri.sezonlar)
            .addField("Bölüm Sayısı", veri.bölümler)
            .addField("IMDB Puanı", veri.imdb)
            .setColor(0x00ffff)
        message.channel.send({embed})
    })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: `arama komutları`
}

exports.help = {
    name: `dizi`,
    description: `Dizi hakkında bilgi verir.`,
    usage: `dizi [dizi]`
}