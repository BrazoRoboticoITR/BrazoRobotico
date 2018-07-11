console.log("Iniciando codigo");

//Crear un archivo json
var Data = '{"nombre":"cipitio"}';
//Tarformar el archivo JSON
var Objeto = JSON.parse(Data);
//Mostar la data
console.log("Nombre: " + Objeto["nombre"] );
//importando libreria de manejo de archivos
var fs = require("fs");
//importando la informacion del archivo
var Archivo = fs.readFileSync("data.json");
//Crear el objeto JSON
var ObjetoJSON = JSON.parse(Archivo);
//Mostar datos
console.log("Usuario: "+ ObjetoJSON.usuario);
console.log("Correo: "+ ObjetoJSON.correo);
console.log("ID: "+ ObjetoJSON["id"]);
//Agregar informasion al JSON
ObjetoJSON.edad = 14;
console.log("La edad es: "+ ObjetoJSON.edad);
ObjetoJSON.id = 3;
//Guardar
var data = JSON.stringify(ObjetoJSON);
fs.writeFileSync('guardado.json', data);

console.log("Terminado");
