const SurveySubjects = require('../models/surveySubjects.model');
const statics = require('../utility/statics.utility').statics;

module.exports.getAll = (req, res) => {
    (async () => {
        const awaitBuilder = await SurveySubjects.find();
        res.json(awaitBuilder);
    })();
};

module.exports.getAllBySurveyId = (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    (async () => {
        const awaitBuilder = await SurveySubjects.find({
            'surveyInfo.surveyId': id
        });
        res.json(awaitBuilder);
    })();
};

module.exports.getAllByOrganizationId = (req, res) => {
    const id = req.params.id;
    (async () => {
        const awaitBuilder = await SurveySubjects.find({
            'surveyInfo.organizationId': id
        });
        res.json(awaitBuilder);
    })();
};

module.exports.getOne = (req, res) => {
    const id = req.params.id;
    (async () => {
        await SurveySubjects.findById(id, (err, ret) => {
            if (err) {
                res.send(err);
            } else {
                res.json(ret);
            }
        });
    })();
};

module.exports.getDefault = (req, res) => {
    (async () => {
        const awaitBuilder = await SurveySubjects.find({
            'surveyInfo.customerId': 'talentmetrics'
        });
        res.json(awaitBuilder);
    })();
}

module.exports.getAllByCustomerId = (req, res) => {
    const id = req.params.id;
    (async () => {
        const awaitBuilder = await SurveySubjects.find({
            'surveyInfo.customerId': id
        });
        res.json(awaitBuilder);
    })();
};

module.exports.addOne = (req, res) => {
    const body = req.body;
    // const postObject = {};
    // const requiredProperties = statics.surveysubjects;
    // for (let prop in body) {
    //     if (!~requiredProperties.indexOf(prop)) {
    //         res.status(500).send({"errorMsg": "Body contained a property not allowed"});
    //         return;
    //     }
    // }
    // requiredProperties.forEach((e) => {
    //     if ( body.hasOwnProperty(e) ) {
    //         postObject[e] = body[e];
    //     }
    // });
    const iface = statics.postObj.surveysubjects(body);
    (async () => {
        await iface.save((err, cust) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(cust);
            }
        });
    })();
};

module.exports.updateOne = (req, res) => {
    console.log(req.body);
    const body = req.body;
    const params = req.params;
    // const postObject = {};
    // const requiredProperties = statics.surveysubjects;
    // for (let prop in body) {
    //     if (!~requiredProperties.indexOf(prop)) {
    //         res.status(500).send({"errorMsg": "Body contained a property not allowed"});
    //         return;
    //     }
    // }
    // requiredProperties.forEach((e) => {
    //     if ( body.hasOwnProperty(e) ) {
    //         postObject[e] = body[e];
    //     }
    // });
    (async () => {
        await SurveySubjects.updateOne({ _id: params.id }, body, (err, ret) => {
            if (err) {
                res.send(err);
            } else {
                res.json(ret);
            }
        });
    })();
};

module.exports.deleteOne = (req, res) => {
    const id = req.params.id;
    (async () => {
        await SurveySubjects.deleteOne({ _id: id }, (err, ret) => {
            if (err) {
                res.send(err);
            } else {
                res.json(ret);
            }
        });
    })();
};

module.exports.deleteBySurveyId = (req, res) => {
    const id = req.params.id;
    (async () => {
        await SurveySubjects.deleteMany({
            'surveyInfo.surveyId': id
        }, (err, ret) => {
            if (err) {
                res.send(err);
            } else {
                res.json(ret);
            }
        });
    })();
}