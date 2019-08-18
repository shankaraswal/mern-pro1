const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WishSchema = Schema({
    fname:String,
    lname:String,
    hobby:String
    })

module.exports = mongoose.model('wishes', WishSchema)