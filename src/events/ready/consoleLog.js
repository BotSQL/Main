require("colors");
const mongoose = require("mongoose");
const mongoURL = process.env.MONGO_URL;

module.exports = async (client) => {
  console.log("[INFO]".blue + `${client.user.username} is online in ${client.guilds.cache.size} servers. ${client.user.id} `.magenta);

  if (!mongoURL) return;
  mongoose.set("strictQuery", true);
  if (await mongoose.connect(mongoURL)) {
    console.log("[SUCCESS]".green + "Connected to the MongoDB database.")
  }
}