const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const WordBanksSchema = mongoose.Schema({
    name : String,
    customerId : ObjectId,
    description : String,
    words : []
}, {
    collection: 'word_banks'
});

const WordBanks = mongoose.model('WordBanks', WordBanksSchema);

module.exports = WordBanks;