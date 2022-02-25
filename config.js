
require('dotenv').config();

secret = 'MY SECRET';
PORT = process.env.PORT || 5000;
DB_NODE_ENV = process.env.NODE_ENV;
DB_MONGO_URI = process.env.MONGO_URI || '';