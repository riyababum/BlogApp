const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://riyababum:riya%400813@ictak-files.obazk.mongodb.net/myBlog?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var articleSchema = new Schema({
    name:String,
    title:String,
    description:String
});
var ArticleInfo = mongoose.model('articles',articleSchema);

module.exports = ArticleInfo;