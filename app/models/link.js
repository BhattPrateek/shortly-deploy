
var crypto = require('crypto');
var mongoose = require('mongoose');

var linkSchema = mongoose.schema({
  url:String,
  baseUrl:String,
  code:String,
  title:String,
  visits:Number
});

var Link = mongoose.model('Link', linkSchema);
Link.pre('save', function(next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

module.exports = Link;
