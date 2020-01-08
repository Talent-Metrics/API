const Customers = require('../models/customers.model');
const Organizations = require('../models/organizations.model');
const Subscriptions = require('../models/subscriptions.model');
const Surveys = require('../models/surveys.model');
const SurveySubjects = require('../models/surveySubjects.model');
const Users = require('../models/users.model');
const WordBanks = require('../models/wordBanks.model');
const Words = require('../models/words.model');

module.exports.statics = {
    customers: ['firstName', 'lastName', 'companyName', 'email', 'phone', 'countryCode',
        'address', 'subscribed', 'subscriptionId', 'lifetimeValue', 'creationDate', 'closedDate',
        'taxId', 'hris','updateDate'],
    organizations: ['name', 'customerId', 'poc', 'size', 'industry', 'annualRevenue', 'region',
        'state'],
    subscriptions: ['subscriptionName', 'subscriptionType', 'customerId', 'startDate', 'endDate',
        'surveyCount', 'maxSurveys', 'autoRenew'],
    surveys: ['_id','name', 'customerId', 'organizationId', 'wordBankId', 'completed', 'subjects'],
    surveysubjects: [
        '_id',
        'customerId',
        'firstName',
        'lastName',
        'email',
        'organizationId',
        'positionTitle',
        'employeeClass',
        'age',
        'department',
        'division',
        'location',
        'hireDate',
        'gender',
        'ethnicity',
        'veteranStatus',
        'disabilityStatus',
        'educationLevel',
        'manager',
        'managerEmail',
        'performance',
        'createDate',
        'completionDate',
        'completed',
        'notifiedCount',
        'surveyId',
        'wordBankId',
        'category1',
        'category2',
        'category3',
        'category4',
        'category5',
        'category6',
        'category7'
    ],
    users: ['username', 'password', 'customerId', 'lockedOut', 'failedAttempts'],
    wordbanks: ['name', 'description', 'words'],
    words: ['name', 'definition', 'value', 'default', 'disabled', 'customerId', 'wordBankId'],
    postObj: {
        customers: (a) => { return new Customers(a); },
        organizations: (a) => { return new Organizations(a); },
        subscriptions: (a) => { return new Subscriptions(a); },
        surveys: (a) => { return new Surveys(a); },
        surveysubjects: (a) => { return new SurveySubjects(a); },
        users: (a) => { return new Users(a); },
        wordbanks: (a) => { return new WordBanks(a);},
        words: (a) => { return new Words(a);}
    }
};
