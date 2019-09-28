const statics = require('../utility/statics.utility').statics;

module.exports.getAll = (req, res) => {
    const model = req.params.model;
    const modelString = `../models/${model}.model`;

    const Model = require(modelString);
    (async () => {
        const awaitBuilder = await Model.find();
        res.json(awaitBuilder);
    })();
};

module.exports.getAllById = (req, res) => {
    const id = req.params.id;
    const model = req.params.model;
    const modelString = `../models/${model}.model`;

    const Model = require(modelString);
    (async () => {
        const awaitBuilder = await Model.findById(id, (err, ret) => {
            if (err) {
                res.send(err);
            } else {
                res.json(ret);
            }
        });
    })();
};

module.exports.getAllByCustomerId = (req, res) => {
    const id = req.params.id;
    const model = req.params.model;
    const modelString = `../models/${model}.model`;

    const Model = require(modelString);
    (async () => {
        const awaitBuilder = await Model.find({
            customerId: id
        });
        res.json(awaitBuilder);
    })();
};

module.exports.addOne = (req, res) => {
    const body = req.body;
    const params = req.params;
    const postObject = {};
    const requiredProperties = statics[params.model.toLowerCase()];

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
    const iface = statics.postObj[params.model](postObject);

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
    // console.log(req.body);
    const body = req.body;
    const params = req.params;
    const modelString = `../models/${params.model}.model`;

    const Model = require(modelString);
    const postObject = {};
    const requiredProperties = statics[params.model.toLowerCase()];

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
        await Model.updateOne({ _id: params.id }, postObject, (err, ret) => {
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
    const modelString = `../models/${req.params.model}.model`;
    const Model = require(modelString);

    (async () => {
        await Model.deleteOne({ _id: id }, (err, ret) => {
            if (err) {
                res.send(err);
            } else {
                res.json(ret);
            }
        });
    })();
};