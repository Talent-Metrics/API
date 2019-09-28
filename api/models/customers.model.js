const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const CustomersSchema = mongoose.Schema({
    userId : {
        type: ObjectId,
        required: true
    },
    firstName : {
        type: String,
        required: true
    },
    lastName : String,
    companyName : String,
    email : String,
    phone : String,
    countryCode : String,
    address : {
    number : String,
        street : String,
        city : String,
        state : String,
        zip : String,
        country : String
    },
    subscribed : Boolean,
    subscriptionId : {
        type: ObjectId,
        required: false
    },
    lifetimeValue : Number,
    creationDate : Date,
    closedDate : Date,
    taxId: Number,
    hris: String
}, {
    collection: 'customers'
});

const Customers = mongoose.model('Customers', CustomersSchema);

module.exports = Customers;
