/*var mongoose = require('./db');
var fruitOnIndexSchema = new mongoose.Schema({
	name:String,
	code:String,
	price:Number
});

var fruitOnIndex = mongoose.model('fruitOnIndex',fruitOnIndexSchema);

module.exports = fruitOnIndex;*/

module.exports = {get : function(condition,callback){
	callback(null,[
	{
		name:"苹果",
		code:"",
		price:12.5,
		imgUrl:"images/苹果.jpg"
	},
	{
		name:"樱桃",
		code:"",
		price:12.5,
		imgUrl:"images/yingtao.jpg"
	},
	{
		name:"香蕉",
		code:"",
		price:12.5,
		imgUrl:"images/banana.jpg"
	},
	{
		name:"榴莲",
		code:"",
		price:12.5,
		imgUrl:"images/liulian.jpg"
	},
	{
		name:"火龙果",
		code:"",
		price:12.5,
		imgUrl:"images/huolongguo.jpg"
	},
	{
		name:"西瓜",
		code:"",
		price:12.5,
		imgUrl:"images/xigua.jpg"
	},
	{
		name:"黄李",
		code:"",
		price:12.5,
		imgUrl:"images/huangli.jpg"
	},
	{
		name:"荔枝",
		code:"",
		price:12.5,
		imgUrl:"images/lizhi.jpg"
	},
	{
		name:"桃子",
		code:"",
		price:12.5,
		imgUrl:"images/taozi.jpg"
	}
	])
}}