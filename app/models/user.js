
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

var userSchema = mongoose.schema({
  username: {type : String, index : {unique = true } },
  password: String
});

var User = mongoose.model(userSchema);

 User.prototype.comparePassword = function(attemptedPassword, callback) {
   bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
     if(err){
       callback(err);
     }else{
       callback(isMatch);
     }
   });
 };

  User.pre('save', function(next) {
     var cipher = Promise.promisify(bcrypt.hash);
     return cipher(this.password, null, null).bind(this)
       .then(function(hash) {
         this.password = hash;
         next();
       });
  }
});



module.exports = User;
