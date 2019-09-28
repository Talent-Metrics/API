const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const UsersSchema = mongoose.Schema({
    username : String,
    password : String,
    customerId : ObjectId,
    lockedOut : Boolean,
    failedAttempts : Number
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;