//codigos para crear la comunicacion con telegram
const TelegramBot = require('node-telegram-bot-api');
const token = '596767394:AAFI7BGWtz04y5NOuIejsk41yF5H_urh55s';
const bot = new TelegramBot(token, {
  polling: true
});
var NumeroSecreto = 564409319;
//codigos para crear la comunicacion con arduino
var SerialPort = require('serialport');
var port = new SerialPort('COM3', {
  baudRate: 9600
});
//creamos para poder abrir los datos de ordenes
var fs = require("fs");
var Archivo = fs.readFileSync("orden.json");
var ordenes = JSON.parse(Archivo);

//Ejecuta un mensaje el bot, pero solo se ejecuta cuando llegue un mensaje del ID
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El ID del char" + chatId);
  var mensaje = msg.text;
  if (mensaje == "Crear") {
    bot.sendMessage(chatId, 'Perfecto vamos a empezar a empaquetar sus donas, cuantas donas de chocolate queres');
    ordenes.[chatId] = "activo";
  } else if (mensaje == "Hola") {
    bot.sendMessage(chatId, 'Buenos dias bienvenidos a donas empaquetadas automaticas');
  } else if (mensaje == "Adios") {
    bot.sendMessage(chatId, 'Gracias por su preferencia.')
  } else {
    bot.sendMessage(chatId, 'No entiendo el comando');
  }
  var data = JSON.stringify(ordenes);
  fs.writeFileSync('orden.json', data);
});
//Cuando recibe el mensaje el puerto usb
/*port.on('data', function(data) {
  if (data = "B") {
    bot.sendMessage(NumeroSecreto, 'Encontre azul');
  } else if (data = "G") {
    bot.sendMessage(NumeroSecreto, 'Encontre verde');
  } else if (data = "R") {
    bot.sendMessage(NumeroSecreto, 'Encontre rojo');
  } else {
    bot.sendMessage(NumeroSecreto, 'No entiendo el mensaje brup');
  }
});
port.setEncoding('utf8');
*/
//Desactivamos el codigo de nodejs
