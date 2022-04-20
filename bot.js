require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === "plshug") {
		await interaction.reply("bring it in for a big bear hug!");
	} else if (interaction.commandName === "owo") {
		await interaction.reply("uwu");
	} else if (interaction.commandName === "meow") {
		await interaction.reply("rawr");
	}
});

client.login(process.env.BOT_TOKEN);
