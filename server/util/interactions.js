const gifModel = require("../models/gifAnime")
const { Collection } = require("@discordjs/collection")
const images = new Collection()

async function getGif(cmd) {
	let collectors = await gifModel.find({ comando: cmd })
	let gif = images.set(cmd, collectors)
	return gif
}

module.exports.interactions = { getGif }