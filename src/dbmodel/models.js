var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

// 模型
module.exports = {
	User:{
		username:{ type: String, required: true },
		password:{ type: String, required: true },
		avatar: String
	},

	Article: { //设置文章的数据模型
        user:{type:ObjectId,ref:'User'}, //用户
        direction:String,
        type:String,
        title: String, //标题
        poster:String,
        intro:String,
        content: String, //内容
        collect: Boolean, //是否收藏
        createDat:String,
        createAt:{type: Date, default: Date.now} //创建时间
    }
}