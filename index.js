const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 10000;

// Servidor web (necessário pro Render)
app.get('/', (req, res) => {
  res.send('Bot está online!');
});

app.listen(PORT, () => {
  console.log(`🌐 Servidor rodando na porta ${PORT}`);
});

// Bot Discord
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`🤖 Bot logado como ${client.user.tag}`);
});

// IMPORTANTE: coloque seu token no Render (Environment Variables)
client.login(process.env.TOKEN);
