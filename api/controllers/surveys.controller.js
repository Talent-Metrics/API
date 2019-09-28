const Surveys = require('../models/surveys.model');
const statics = require('../utility/statics.utility').statics;

module.exports.getAll = (req, res) => {
    (async () => {
        const awaitBuilder = await Surveys.find();
        res.json(awaitBuilder);
    })();
};

module.exports.getAllByOrganizationId = (req, res) => {
    const id = req.params.id;
    (async () => {
        const awaitBuilder = await Surveys.find({
            organizationId: id
        });
        res.json(awaitBuilder);
    })();
};

module.exports.getOne = (req, res) => {
    const id = req.params.id;
    (async () => {
        await Surveys.findById(id, (err, ret) => {
            if (err) {
                res.send(err);
            } else {
                res.json(ret);
            }
        }).populate('surveys');
    })();
};

module.exports.getAllByCustomerId = (req, res) => {
    const id = req.params.id;
    (async () => {
        const awaitBuilder = await Surveys.find({
            customerId: id
        }).populate('surveys');
        res.json(awaitBuilder);
    })();
};

module.exports.addOne = (req, res) => {
    const body = req.body;
    const postObject = {};
    const requiredProperties = statics.surveys;
    for (let prop in body) {
        if (!~requiredProperties.indexOf(prop)) {
            res.status(500).send({"errorMsg": "Body contained a property not allowed"});
            return;
        }
    }
    requiredProperties.forEach((e) => {
        if ( body.hasOwnProperty(e) ) {
            postObject[e] = body[e];
        }
    });
    const iface = statics.postObj.surveys(postObject);
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
    const body = req.body;
    console.log(body);
    const params = req.params;
    const postObject = {};
    const requiredProperties = statics.surveys;
    for (let prop in body) {
        if (!~requiredProperties.indexOf(prop)) {
            res.status(500).send({"errorMsg": "Body contained a property not allowed"});
            return;
        }
    }
    requiredProperties.forEach((e) => {
        if ( body.hasOwnProperty(e) ) {
            postObject[e] = body[e];
        }
    });
    (async () => {
        await Surveys.updateOne({ _id: params.id }, postObject, (err, ret) => {
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
        await Surveys.deleteOne({ _id: id }, (err, ret) => {
            if (err) {
                res.send(err);
            } else {
                res.json(ret);
            }
        });
    })();
};