var mongoose = require('mongoose');
  //申明一个mongoos对象
 var UsersSchema = new mongoose.Schema({
     name:String,
     username:String,
     company:String,
     position:String,
     phone:String,
     address:String,
     registtime:String,
     password:String,
     meta: { 
          createAt: {
              type: Date,
            default: Date.now()
         },
        updateAt: {
             type: Date,
             default: Date.now()
        }
     }
 })
 //每次执行都会调用,时间更新操作
 UsersSchema.pre('save', function(next) {
     if(this.isNew) {
         this.meta.createAt = this.meta.updateAt = Date.now();
     }else {
         this.meta.updateAt = Date.now();
     }
     next();
 })
 //查询的静态方法
 UsersSchema.statics = {

     fetch: function(cb) { //查询所有数据
         return this
           .find()
           .sort('meta.updateAt') //按更新时间排序
           .exec(cb) //回调
     },
     findByaddress: function(address, cb) { //按照帐号地址查找
         return this
           .findOne({address: address})          
           .exec(cb)
     },
     findByusername: function(username, cb) { //按照用户名查找
		return this
           .findOne({username: username})          
           .exec(cb)
     },
     findBypage: function(page,cb){//简单的分页查询，6条数据为一页
         return this
             .find().sort('meta.updateAt').skip((page-1)*6).limit(6).exec(cb);
     },
     findBypage2: function(page,cb){//简单的分页查询，8条数据为一页
         return this
             .find().sort('meta.updateAt').skip((page-1)*8).limit(8).exec(cb);
     }
 }
var User = mongoose.model('User',UsersSchema) // 编译生成Model 模型
//暴露出去的方法
module.exports = User