const Discord = require('discord.js')
const Insta = require('scraper-instagram');
const MadnessInstagram = new Insta();
let yourSessionId = "6320522103%3AiQVlHiLniXt8if%3A16"
// Ben CaptainMami Nasıl Kullanırsanız Öyle Düzenleyin Benim Düzen Bu
exports.run = async (client, message, args) => { 
  if (!args[0]) {
        return message.channel.send(`<a:hayir:778962497302298666> **| Lütfen İnstagram İsmini Gir.**`)
    }
	try{	
		MadnessInstagram.authBySessionId(yourSessionId)
		.then((Insta) => {
        	MadnessInstagram.getProfile(args[0])
        	.then(madness => {
			const embed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor("RANDOM")
                .setTitle(`${madness.name} Instagram Profile`)
				.setURL(madness.link)
                .setThumbnail(madness.pic)
                .setDescription(`
                    **<:what:778943517384114186> İD**: ${madness.id}
                    **👤 İsim :** ${madness.name}
                    **<:kalp:776148489699983402> Takipçi Sayısı :** ${madness.followers} followers
                    **<a:yeahh:778977648780771380> Takip Sayısı :** ${madness.following} following
                    **<a:Hawali:778977635056877578> Post Sayısı :** ${madness.posts || 0}
                    **🔐 Doğrulumu :** ${madness.private ? "Evet <:onay:778962489223413781>" : "Hayır <a:hayir:778962497302298666>"}
                    **<a:unlem:778977635987750912> Onaylımı :** ${madness.verified ? "Evet <:onay:778962489223413781>" : "Hayır <a:hayir:778962497302298666>"}
                    **<a:canloading:696041374184898620> Biografi :** ${madness.bio || "Bio Yok"}
					**<a:canloading:696041374184898620> Website :** ${madness.website || "Yok"}`)
            message.channel.send(embed)
})
 
    })
    } catch (err) {
        console.error(err);
    }
  
  // embed yapımınıda gösterdim

  
}
 

exports.conf = {
	enabled:false,
	guildOnly: false,
	aliases: ["instagram","insta","profil"],
	permLevel: 0,
}

exports.help = {
	name: 'instagram', 
	description: '',
	usage: ''
}
