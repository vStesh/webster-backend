const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
require('dotenv').config();
const mongoose = require('mongoose');

const {SERVER, DB} = require('./config');
const app = express();
const wwwDir = '../www';
const clientDir = '../client';

app.use(express.json({ extended: true }));
app.use(cookieParser())

app.use('/api', require('./routes/api.routes'));

if(process.env.NODE_ENV === 'production') {
    // app.use('/', express.static(path.join(__dirname, 'client', 'build')));
    app.use('/my', express.static(clientDir));
    app.use('/', express.static(wwwDir));

    app.get('*', (req, res) => {
        res.sendFile(clientDir + '/index.html');
    });
}


async function start() {
    try {
        await mongoose.connect(DB.MONGOOSE.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(SERVER.PORT, () => {
            console.log(`Server start at ${SERVER.PROTOCOL}://${SERVER.HOST}:${SERVER.PORT}`);
        })
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();