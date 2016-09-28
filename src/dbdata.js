'use strict'

const mongoose = require('mongoose');
const dbconf = require('../config/db');

// 连接数据库
mongoose.connect(dbconf.url, (err) => {
	if (err) {
    	console.error('Failed connecting to mongodb');
  	} else {
  	  	console.log('Succecssfully connected to dbdata');
  	}
});