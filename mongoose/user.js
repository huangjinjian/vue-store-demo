var mongoose = require('./db.js'),
  Schema = mongoose.Schema;
var UserSchema = new Schema({
  "userId": {
    type: Number,
    required: true
  },
  "userName": String,
  "userPwd": String,
  "orderList": Array,
  "cartList": [{
    "productId": String,
    "productName": String,
    "salePrice": String,
    "productImage": String,
    "checked": String,
    "productNum": String
  }],
  "addressList": [{
    "addressId": String,
    "userName": String,
    "streetName": String,
    "postCode": Number,
    "tel": Number,
    "isDefault": Boolean
  }]
});


module.exports = mongoose.model('User', UserSchema);
