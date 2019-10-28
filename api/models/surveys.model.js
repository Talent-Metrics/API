const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const SurveysSchema = mongoose.Schema({
    name : String,
    customerId: ObjectId,
    organizationId: ObjectId,
    wordBankId: ObjectId,
    completed: number,
    subjects: number
});

const Surveys = mongoose.model('Surveys', SurveysSchema);

module.exports = Surveys;