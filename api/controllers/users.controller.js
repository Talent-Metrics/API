const Users = require('../models/users.model');
const statics = require('../utility/statics.utility').statics;

module.exports.getAll = (req, res) => {
    (async () => {
        const awaitBuilder = await Users.find();
        res.json(awaitBuilder);
    })();
};

module.exports.getOne = (req, res) => {
    const id = req.params.id;
    (async () => {
        await Users.findById(id, (err, ret) => {
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
        const awaitBuilder = await Users.find({
            customerId: 'talentmetrics'
        });
        res.json(awaitBuilder);
    })();
}

module.exports.getAllByCustomerId = (req, res) => {
    const id = req.params.id;
    (async () => {
        const awaitBuilder = await Users.find({
            customerId: id
        });
        res.json(awaitBuilder);
    })();
};

module.exports.addOne = (req, res) => {
    const body = req.body;
    const postObject = {};
    const requiredProperties = statics.users;
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
    const iface = statics.postObj.users(postObject);
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
    const requiredProperties = statics.users;
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
        await Users.updateOne({ _id: params.id }, postObject, (err, ret) => {
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
        await Users.deleteOne({ _id: id }, (err, ret) => {
            if (err) {
                res.send(err);
            } else {
                res.json(ret);
            }
        });
    })();
};