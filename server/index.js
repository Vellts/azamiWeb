const express = require('express');
const path = require('path');
const app = express();
const React = require("react")
const dotenv = require("dotenv").config()
const { Mongo } = require("./util")
const xd = require("./util/interactions")
const mongoose = require("mongoose")
const router = require("./routes")
const { Collection } = require("@discordjs/collection")

const port = process.env.PORT ?? 3001


/////// Database ///////

Mongo()

/////// Database ///////

app.use('/', express.static(__dirname + '/build'));

app.use("/api/v1", router.API)

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(port, () => {
  console.log(`Página web en: http://localhost:${port}`)
});