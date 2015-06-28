var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
	var fruitOnIndex = require('../models/fruitsonindex');
	fruitOnIndex.get(null,function(err,fruitOnIndex){
		res.render('index',{'fruits':fruitOnIndex});
	});
});
module.exports = router;

