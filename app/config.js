var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:4568');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection: error'));
db.once('open', function(){
  console.log("MongoDB Connection is OPEN!");
});

module.exports = db;

      /*link.string('url', 255);
      link.string('baseUrl', 255);
      link.string('code', 100);
      link.string('title', 255);
      link.integer('visits');*/

    /*  user.string('username', 100).unique();
      user.string('password', 100);*/
