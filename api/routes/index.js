// const ctrlStandard = require('../controllers/standard.controller');
const ctrlCustomers = require('../controllers/customers.controller');
const ctrlOrganizations = require('../controllers/organizations.controller');
const ctrlSubscriptions = require('../controllers/subscriptions.controller');
const ctrlSurveys = require('../controllers/surveys.controller');
const ctrlSurveySubjects = require('../controllers/surveySubjects.controller');
const ctrlUsers = require('../controllers/users.controller');
const ctrlWordBank = require('../controllers/wordBanks.controller');
const ctrlWords = require('../controllers/words.controller');
const ctrlMail = require('../controllers/mail.controller');

module.exports = (app) => {
    // Gets
        // app.get('/api/standard/:model', ctrlStandard.getAll);
        // app.get('/api/standard/:model/id/:id', ctrlStandard.getAllById);
        // app.get('/api/standard/:model/:id', ctrlStandard.getAllByCustomerId);

        // CUSTOMERS
        app.get('/api/customers', ctrlCustomers.getAll);
        app.get('/api/customers/id/:id', ctrlCustomers.getOne);

        // ORGANIZATIONS
        app.get('/api/organizations', ctrlOrganizations.getAll);
        app.get('/api/organizations/id/:id', ctrlOrganizations.getOne);
        app.get('/api/organizations/customer/:id', ctrlOrganizations.getAllByCustomerId);
        app.get('/api/organizations/reference', ctrlOrganizations.getReference);

        // SUBSCRIPTIONS
        app.get('/api/subscriptions', ctrlSubscriptions.getAll);
        app.get('/api/subscriptions/id/:id', ctrlSubscriptions.getOne);
        app.get('/api/subscriptions/customer/:id', ctrlSubscriptions.getAllByCustomerId);

        // SURVEYS
        app.get('/api/surveys', ctrlSurveys.getAll);
        app.get('/api/surveys/id/:id', ctrlSurveys.getOne);
        app.get('/api/surveys/customer/:id', ctrlSurveys.getAllByCustomerId);
        app.get('/api/surveys/organization/:id', ctrlSurveys.getAllByOrganizationId);

        // SURVEY SUBJECTS
        app.get('/api/surveysubjects', ctrlSurveySubjects.getAll);
        app.get('/api/surveysubjects/id/:id', ctrlSurveySubjects.getOne);
        app.get('/api/surveysubjects/customer/:id', ctrlSurveySubjects.getAllByCustomerId);
        app.get('/api/surveysubjects/survey/:id', ctrlSurveySubjects.getAllBySurveyId);
        app.get('/api/surveysubjects/organization/:id', ctrlSurveySubjects.getAllByOrganizationId);

        // USERS
        app.get('/api/users', ctrlUsers.getAll);
        app.get('/api/users/id/:id', ctrlUsers.getOne);
        app.get('/api/users/customer/:id', ctrlUsers.getAllByCustomerId);

        // WORD BANKS
        app.get('/api/wordbanks', ctrlWordBank.getAll);
        app.get('/api/wordbanks/id/:id', ctrlWordBank.getOne);
        app.get('/api/wordbanks/default', ctrlWordBank.getDefault);

        // WORDS
        app.get('/api/words', ctrlWords.getAll);
        app.get('/api/words/id/:id', ctrlWords.getOne);
        app.get('/api/words/customer/:id', ctrlWords.getAllByCustomerId);
        app.get('/api/words/default', ctrlWords.getDefault);
        app.get('/api/words/wordbank/:id', ctrlWords.getOneByWordBankId);


    // Adds
        // app.post('/api/standard/:model', ctrlStandard.addOne);

        // CUSTOMERS
        app.post('/api/customers', ctrlCustomers.addOne);

        // MAIL
        app.post('/api/mail', ctrlMail.mail);

        // ORGANIZATIONS
        app.post('/api/organizations', ctrlOrganizations.addOne);

        // SUBSCRIPTIONS
        app.post('/api/subscriptions', ctrlSubscriptions.addOne);

        // SURVEYS
        app.post('/api/surveys', ctrlSurveys.addOne);

        // SURVEY SUBJECTS
        app.post('/api/surveysubjects', ctrlSurveySubjects.addOne);

        // USERS
        app.post('/api/users', ctrlUsers.addOne);

        // WORD BANKS
        app.post('/api/wordbanks', ctrlWordBank.addOne);

        // WORDS
        app.post('/api/words', ctrlWords.addOne);

    // Updates
        // app.put('/api/standard/:model/:id', ctrlStandard.updateOne);

        // CUSTOMERS
        app.put('/api/customers/:id', ctrlCustomers.updateOne);

        // ORGANIZATIONS
        app.put('/api/organizations/:id', ctrlOrganizations.updateOne);

        // SUBSCRIPTIONS
        app.put('/api/subscriptions/:id', ctrlSubscriptions.updateOne);

        // SURVEYS
        app.put('/api/surveys/:id', ctrlSurveys.updateOne);

        // SURVEY SUBJECTS
        app.put('/api/surveysubjects/:id', ctrlSurveySubjects.updateOne);

        // USERS
        app.put('/api/users/:id', ctrlUsers.updateOne);

        // WORD BANKS
        app.put('/api/wordbanks/:id', ctrlWordBank.updateOne);

        // WORDS
        app.put('/api/words/:id', ctrlWords.updateOne);

    // Deletes
        // app.delete('/api/standard/:model/:id', ctrlStandard.deleteOne);

        // CUSTOMERS
        app.delete('/api/customers/:id', ctrlCustomers.deleteOne);

        // ORGANIZATIONS
        app.delete('/api/organizations/:id', ctrlOrganizations.deleteOne);

        // SUBSCRIPTIONS
        app.delete('/api/subscriptions/:id', ctrlSubscriptions.deleteOne);

        // SURVEYS
        app.delete('/api/surveys/:id', ctrlSurveys.deleteOne);

        // SURVEY SUBJECTS
        app.delete('/api/surveysubjects/id/:id', ctrlSurveySubjects.deleteOne);
        app.delete('/api/surveysubjects/survey/:id', ctrlSurveySubjects.deleteBySurveyId);

        // USERS
        app.delete('/api/users/:id', ctrlUsers.deleteOne);

        // WORD BANKS
        app.delete('/api/wordbanks/:id', ctrlWordBank.deleteOne);

        // WORDS
        app.delete('/api/words/:id', ctrlWords.deleteOne);
};