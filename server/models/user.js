//User
//email - require it - trim it - set type - set min length of 1
var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email:{
      type:String,
      trim:true,
      minlength:1,
      require:true
    }
});

module.exports={User};
/*
var newUser = new User({
    email:'mayank.sharma049@gmail.com'
});

newUser.save().then((doc)=>{
    console.log('Email : ',doc);
},(e)=>{
   console.log('Unable to save',e); 
});
*/