import Discord from 'discord.js';

const help = (bot, msg, cmd) => {
  const richEmbed = new Discord.RichEmbed();

  msg.channel.send({
    embed: richEmbed
            .setColor('#ffffff')
            .setDescription(`${"`" + ">invites" + "`"} - **check # invites until next role**
${"`" + ">top <#>" + "`"} - **check a certain # of top inviters**
${"`" + ">membercount" + "`"} - **check total members in server**
${"`" + ">set <#channel-name>" + "`"} - **set the bot channel**
${"`" + ">set default" + "`"} - **allow bot in all channels**
**Created by Ashwin**`)
  });
}

export default help;
