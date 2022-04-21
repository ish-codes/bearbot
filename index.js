const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require("dotenv").config();

const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const token = process.env.BOT_TOKEN;

const commands = [
	{
		name: "bearhug",
		description: "bearbot will give you a big bear hug!",
	},
	{
		name: "bearnice",
		description:
			"bearbot is here for you and will tell you something kind",
	},
	{
		name: "owo",
		description: "bearbot will uwu at you",
	},
];

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
	try {
		console.log("Started refreshing application (/) commands.");

		await rest.put(
			Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
			{ body: commands }
		);

		console.log("Successfully reloaded application (/) commands.");
	} catch (error) {
		console.error(error);
	}
})();
