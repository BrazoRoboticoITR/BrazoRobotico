const TelegramBot = require('node-telegram-bot-api');

const token = '596767394:AAFI7BGWtz04y5NOuIejsk41yF5H_urh55s';

const bot = new TelegramBot(token, {
  polling: true
});

var NumeroSecreto = 564409319;
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El ID del char" + chatId);
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
