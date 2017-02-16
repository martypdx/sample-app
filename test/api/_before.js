// 1. make a connection to mongo
process.env.DB_URI = 'mongodb://localhost:27017/ripe-banana-test';
require('../../lib/connection');