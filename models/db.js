var mongoose = require('mongoose');
mongoose.connect('mongodb://');

var db = mongoose.connection;
db.on('error',function callback() {
	console.log("Connection error");
});
db.once('open',function callback() {
	console.log("Mongo working!");
});

module.exports = mongoose;