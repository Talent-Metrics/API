const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;
const OrganizationReferenceSchema = mongoose.Schema({
    _id: ObjectId,
    industries: Array(),
    orgSizes: [{
        key : String,
        value : String
    }],
    regions: [{
        key : String,
        value : String
    }],
    revenues: [{
        key : String,
        value : String
    }],
    states: [{
        key : String,
        value : String
    }],
    },
    { collection: 'organization_reference'}
);

const OrganizationReference = mongoose.model('OrganizationReference', OrganizationReferenceSchema);

module.exports = OrganizationReference;