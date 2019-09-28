const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://db_admin:wimwej-syjfuq-9Hokna@cluster0-qct37.azure.mongodb.net/retryWrites=true';
const dbName = 'talent-metrics';
mongoose.connect(dbUrl, { useNewUrlParser: true, dbName: dbName });

const db = mongoose.connection;

db.on('open', () => {
    console.log('Mongoose connected');
});