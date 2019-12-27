import Discord from 'discord.js';
import { checkAdmin } from '../checkPerms.js';

export let channelPerm = undefined;

const set = (msg, cmd, subcmd) => {
  const richEmbed = new Discord.RichEmbed();
  if (subcmd === 'default' && checkAdmin(msg) === true) {
    channelPerm = undefined;
    msg.channel.send({
      embed: richEmbed
              .setColor('RANDOM')
              .setDescription(`Referral checking can now be done in any channel.`)
    })
  } else if (checkAdmin(msg) === true) {
    channelPerm = subcmd;
    msg.channel.send({
      embed: richEmbed
              .setColor('RANDOM')
              .setDescription(`Referral checking channel is now ${channelPerm}.`)
    })
  } else {
    msg.channel.send({
      embed: richEmbed
              .setColor('RANDOM')
              .setDescription(`You don't have permission to do this.`)
    })
  }
}

export default set;
