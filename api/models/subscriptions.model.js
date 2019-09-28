const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const SubscriptionsSchema = mongoose.Schema({
    subscriptionName : String,
    subscriptionType : Number,
    customerId : ObjectId,
    startDate : Date,
    endDate : Date,
    surveyCount : Number,
    maxSurveys : Number,
    autoRenew : Number
});

const Subscriptions = mongoose.model('Subscriptions', SubscriptionsSchema);

module.exports = Subscriptions;