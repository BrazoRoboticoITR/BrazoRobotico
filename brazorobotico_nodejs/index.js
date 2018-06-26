const TelegramBot = require('node-telegram-bot-api');

const token = '596767394:AAFI7BGWtz04y5NOuIejsk41yF5H_urh55s';

const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  var Mensaje =msg.text;
  if(Mensaje == "Hola"){
  bot.sendMessage(chatId, 'Buenos dias bienvenidos a donas empaquetadas automaticas');
  }
  else if(Mensaje == "Adios"){
    bot.sendMessage(chatId, 'Gracias por su preferencia.')
  } else{
  bot.sendMessage(chatId, 'No entiendo el comando');
  }
});
