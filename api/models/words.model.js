const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const WordsSchema = mongoose.Schema({
    name : String,
    definition : String,
    value : Number,
    default : Boolean,
    disabled : Boolean,
    customerId: ObjectId,
    wordBankId: ObjectId
});

const Words = mongoose.model('Words', WordsSchema);

module.exports = Words;