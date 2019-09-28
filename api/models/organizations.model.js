const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const OrganizationSchema = mongoose.Schema({
    name: String,
    customerId: ObjectId,
    poc: String,
    size: Number,
    industry: String,
    annualRevenue: Number,
    region: Number,
    state: String
}, {
    collection: 'organizations'
});

const Organizations = mongoose.model('Organizations', OrganizationSchema);

module.exports = Organizations;
