const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

var DireccionSchema = new Schema({
  id: Number,
  userId: Number,
  longitud: String,
  latitud: String,
  direccion: String,
  descripcion: String
});

module.exports = Mongoose.model('Direccion', DireccionSchema); 
