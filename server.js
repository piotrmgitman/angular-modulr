const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const http = require('http');
const helmet = require('helmet');
const app = express();

const args = process.argv.slice(2);
const cors = require('./server/cors');

// API
const api = require('./server/routes/api');

// Helmet
app.use(helmet());

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Output
app.use(express.static(path.join(__dirname, 'dist')));

// Set CORS
switch (args[0]) {
    case '--cors':
        app.use(cors.permission);
        console.log('CORS is enabled...');
        break;
    case '':
        console.log('CORS is disabled...');
        break;
    default:
        console.log('CORS is disabled...');
}

// API location
app.use('/v1/api', api);

// Other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Port
const port = process.env.PORT || '3000';
app.set('port', port);

// Server
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));