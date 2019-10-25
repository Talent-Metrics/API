const Customers = require('../models/customers.model');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;
const statics = require('../utility/statics.utility').statics;


module.exports.getAll = (req, res) => {
    (async () => {
        await Customers.find({}, (err, ret) => {
            if (err) {
                res.send(err);
            } else {
                res.json(ret);
            }
        });
    })();
};

module.exports.getOne = (req, res) => {
    const id = req.params.id;
    (async () => {
        await Customers.findById(id, (err, ret) => {
            if (err) {
                res.send(err);
            } else {
                res.json(ret);
            }
        });
    })();
};

module.exports.addOne = (req, res) => {
    const body = req.body;
    const postObject = {};
    const requiredProperties = statics.customers;
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
    const iface = statics.postObj.customers(postObject);
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
    const params = req.params;
    const postObject = {};
    const requiredProperties = statics.customers;
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
        await Customers.updateOne({ _id: params.id }, postObject, (err, ret) => {
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
        await Customers.deleteOne({ _id: id }, (err, ret) => {
            if (err) {
                res.send(err);
            } else {
                res.json(ret);
            }
        });
    })();
};