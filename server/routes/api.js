const express = require("express")
const route = express.Router()
const gifModel = require("../models/gifAnime")
const rateLimit = require('express-rate-limit')
const { interactions } = require("../util/interactions")
const available = require("../util/available")

const apiRequestLimiter = rateLimit({
    windowMs: 1 * 60 * 1000/2,
    max: 15,
    handler: function (req, res) {
        res.status(429).json({
        	status: 429,
         	error: 'Too Many Request. Vuelve a intentarlo más tarde.'
        })
        throw new Error("HTTP 429. Too Many Request. Vuelve a intentarlo más tarde.")
    },
})

route.get("/available", async (req, res) => {
    res.json(available)
})

route.get("/endpoint/:interaction/", async (req, res) => {
    let disponible = ["angry", "baka", "bite", "blush", "bored", "cry", "cuddle", "dance", "evil", "feed", "goodbye", "handholding", "happy", "heal", "hi", "hug", "kill", "kiss", "latom", "laugh", "lewd", "lick", "pat", "poke", "pout", "punch", "run", "sad", "scared", "sigh", "sip", "slap", "sleep", "smug", "spank", "splash", "tickle"]
    if(!disponible.includes(req.params.interaction)) return res.redirect("/api/v1/")
    let si = await interactions.getGif(req.params.interaction)
    let e = si.get(req.params.interaction)
    let resp = e[Math.floor(Math.random() * e.length)]
    return res.status(200).json({
        status: 200,
        gif: resp.gif,
        anime: resp.name
    })
    //console.log(req.params.id)
})

route.use(apiRequestLimiter)

module.exports = route