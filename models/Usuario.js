const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

var UsuarioSchema = new Schema({
  id: Number,
  Nombre: String,
  Apellido: String,
  Email: String,
  contraseña: String
});

module.exports = Mongoose.model('Usuario', UsuarioSchema);
