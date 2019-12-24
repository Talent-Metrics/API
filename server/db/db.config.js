const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/';
const dbName = process.env.DB_NAME ||'talent-metrics';
mongoose.connect(dbUrl, { useNewUrlParser: true, dbName: dbName, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('open', () => {
    console.log('Mongoose connected');
});