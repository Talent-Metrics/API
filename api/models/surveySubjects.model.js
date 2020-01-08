const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const SurveySubjectsSchema = mongoose.Schema({
    surveyInfo: {
        completed : Boolean,
        completionDate : Date,
        createDate : Date,
        customerId : ObjectId,
        notifiedCount : Number,
        organizationId : ObjectId,
        surveyId : ObjectId,
        wordBankId : ObjectId
    },
    personalInfo: {
        firstName : String,
        lastName : String,
        email : String,
        positionTitle : String,
        employeeClass : String,
        age: Number,
        department : String,
        division : String,
        location : String,
        hireDate : Date,
        gender : String,
        ethnicity : String,
        veteranStatus : Boolean,
        disabilityStatus : Boolean,
        educationLevel : Number,
        manager : String,
        managerEmail : String,
        performance: Number
    },
    categories: {
        category1 : Array,
        category2 : Array,
        category3 : Array,
        category4 : Array,
        category5 : Array,
        category6 : Array,
        category7 : Array
    }
}, {
    collection: 'survey_subjects'
});

const SurveySubjects = mongoose.model('SurveySubjects', SurveySubjectsSchema);

module.exports = SurveySubjects;