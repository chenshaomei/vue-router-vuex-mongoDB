'use strict';

var express = require('express');
var router = express.Router();

var model = require('../dbmodel')

// 获取文章列表
router.get('/articlelist', function (req, res) {

	let pageSize = req.query.pageSize || 8;
	
	let type = req.query.type;
	let keyWord = req.query.keyWord;
	let keyReg = new RegExp(keyWord,'i')
	let options={};
	// {'$or' : [ {'type':type} , {'title':keyReg} ] } 或者 
	if(type){
		options = {'type':type}
	}else if(keyWord){
		options = {'$or' : [ {'type':keyReg} , {'title':keyReg} , {'intro': keyReg}] }
	}

	Model('Article').count(options, (err, count) =>{
		// 页数
		let totalPage = Math.ceil(count/8);
		//如果小于等于0 只有一页
		let pageNum = req.query.pageNo;
    	pageNum=pageNum<=0?1:pageNum;

    	

    	// 返回的data
		let resData = {};
		resData.totalPage = totalPage;
		resData.pageNum = pageNum;
		resData.pageSize = pageSize;


		Model('Article').find(options).sort({'createDat':-1}).skip((pageNum-1)*pageSize).limit(pageSize).exec(function(err,articles){

			resData.list = articles;
			console.log('articles:')
			console.log(articles.length)
			console.log(resData.totalPage)
			res.send(resData);
			res.end();

		})


    // Model('Article').find(options, function (err, list){
    //     if (err) {
    //         console.error(err);
    //         return res.status(500).json({
    //           message: err.message
    //         });
    //     }
  
    //   res.json({ list: list });
    // });


    })

});

// 获取一条 文章详情
router.get('/articlelist/details/:id', function( req, res ){
	let id = req.params.id;
	console.log(id)
	Model('Article').find({_id:id},function(err,article){
		let resData = {}
		if(article&&article.length>0){
		    resData={
	    	    article:article[0]
	    	};
		}
		
	    res.send(resData);
		res.end();
	})
})


// 登陆
router.post('/login', function( req, res ){
	const user = req.body;
	console.log(req)
	console.log(user)

	let data={};
     Model('User').findOne(user,function(err,user){
         console.log(user)
        if(user){
        	data.user = {id:user._id,username:user.username};
            data.msg='登陆成功';
	        data.code=0;
            
        }else{
        	data.msg='登陆失败';
	        data.code=1;
        }
        res.send(data);
        res.end();
    })
})

// 收藏&取消收藏
router.post('/collect', function(req, res){

	let id = req.body.id;
	const collect = req.body.collectActive;

	console.log(req.body)

	 Model('Article').update({_id:id},{$set: {'collect': collect}},function(err){

	 	let data = {}
	 	if(err){
	 		data.msg = '失败';
	 		data.success = false;
	 	}else{
	 		data.msg = '成功';
	 		data.success = true;
	 	}
	 	res.send(data);
    	res.end();
	 })
})

// 查询收藏列表

router.get('/collectlist',function(req, res){
	let options = {'collect':true}
	
	let pageSize = req.query.pageSize || 8;
	Model('Article').count(options, (err, count) =>{
		// 页数
		let totalPage = Math.ceil(count/pageSize);
		//如果小于等于0 只有一页
		let pageNum = req.query.pageNo;
    	pageNum=pageNum<=0?1:pageNum;

    	

    	// 返回的data
		let resData = {};
		resData.totalPage = totalPage;
		resData.pageNum = pageNum;
		resData.pageSize = pageSize;


		Model('Article').find(options).sort({'createDat':-1}).skip((pageNum-1)*pageSize).limit(pageSize).exec(function(err,articles){

			resData.list = articles;
			console.log('articles:')
			console.log(articles.length)
			console.log(resData.totalPage)
			res.send(resData);
			res.end();

		})

    })
})



// router.post('/loyout', function(){
// 	req.setLoginUser(null);

// 	res.send({trans:{isErr:false, errorCode: null},data: null});
//     res.end();
// })



module.exports = router;