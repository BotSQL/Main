const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test if everything works.")
    .setDMPermission(false)
    .addUserOption((option) => 
      option.setName("user").setDescription("The user to configure.")
    )
    .toJSON(),

  userPermissions: [PermissionFlagsBits.ManageMessages],
  botPermissions: [PermissionFlagsBits.Connect],

  run: (client, interaction) => {
    return interaction.reply("The is a test command.");
  },
};