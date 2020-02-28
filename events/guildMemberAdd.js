module.exports = member => {
  member.send(
    `😊 Hoşgeldin <@${member.id}>, Seninle Beraber ${member.guild.memberCount} Kişiyiz! \n${member.guild.name}`
  );
};
