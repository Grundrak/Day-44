const express = require('express');
const app = express();
const Product = require('./models/product');
const connectMongoose = require('./config/connectMng')


connectMongoose();

