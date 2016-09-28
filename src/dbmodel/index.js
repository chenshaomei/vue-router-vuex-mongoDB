'use strict'
const mongoose = require('mongoose');
const models = require('./models');

// 
const User =  mongoose.model('User', new mongoose.Schema(models.User));
const Article = mongoose.model('Article', new mongoose.Schema(models.Article));

// 全局
global.Model = function (type) {
    return mongoose.model(type);
}

