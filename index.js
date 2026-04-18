const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();

// Rota pra UptimeRobot
app.get('/', (req, res) => {
  res.send('Estou vivo 🚀');
});

// Porta do Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🌐 Servidor rodando na porta ${PORT}`);
});

// Bot Discord
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.on('ready', () => {
  console.log(`🤖 Bot logado como ${client.user.tag}`);
});

// ERRO VISÍVEL (IMPORTANTE)
client.on('error', console.error);
process.on('unhandledRejection', console.error);

// Login
client.login(process.env.TOKEN);
