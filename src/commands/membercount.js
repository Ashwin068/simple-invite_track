import Discord from 'discord.js';

const membercount = (msg) => {
  const richEmbed = new Discord.RichEmbed();
  msg.channel.send({
    embed: richEmbed
              .setColor('RANDOM')
              .setDescription(`There are ${msg.member.guild.memberCount} members in this guild.`)
  });
}

export default membercount;
