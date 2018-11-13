var Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/test_db');
var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback(){
  console.log('database open');
});

exports.db = db;
