const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://riyababum:riya%400813@ictak-files.obazk.mongodb.net/myBlog?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username:String,
    email:String,
    password:String
});
var UserInfo = mongoose.model('users',userSchema);

module.exports = UserInfo;