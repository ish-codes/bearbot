require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const fetch = require("node-fetch");

function getAffirmation() {
	return fetch("https://www.affirmations.dev/")
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			return data.affirmation;
		});
}

function getGIF() {
	const searchUrl = new URL("https://api.giphy.com/v1/gifs/search");
	searchUrl.search = new URLSearchParams({
		api_key: process.env.API_KEY,
		q: "hug",
		rating: "g",
	});
	return fetch(searchUrl)
		.then((res) => {
			return res.json();
		})
		.then((jsonRes) => {
			const randomInt = Math.floor(
				Math.random() * jsonRes.data.length
			);
			return jsonRes.data[randomInt].url;
		});
}

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === "bearhug") {
		await getGIF().then((gif) => {
			interaction.reply(gif);
		});
	} else if (interaction.commandName === "bearnice") {
		await getAffirmation().then((quote) => {
			interaction.reply(quote);
		});
	} else if (interaction.commandName === "owo") {
		await interaction.reply("uwu");
	}
});

client.login(process.env.BOT_TOKEN);
