const fetch = require("node-fetch");
const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "screenshot",
    description: "Take a screenshot of any webpage",
    ownerOnly: false,
    options: [
        {
            type: 'STRING',
            description: 'Url to take ss',
            name: 'url',
            required: true,
        },
    ],
    userperm: [""],
    botperm: [""],
    /**
     *
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (bot, interaction, args) => {
   
    const user = interaction.user.tag
    const urls = args[0];
        
 if (urls.length < 3)
      return interaction.editReply("https is too short to reach - 3 limit")
        .catch(e => {});

    let m = await interaction.editReply("Getting image...")
    const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
    try {
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );

      interaction.channel.send({ files: [{ attachment: body, name: "Screenshot.png" }]});
      m.delete();
    } catch (err) {
      if (err.status === 404)
        return interaction.editReply("Could not find any results. Invalid URL?")
          .catch(e => {})
      
      return interaction.editReply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`)
        .catch(e => {});
    }
  }
};