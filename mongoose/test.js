var User = require("./user.js");


/** * 插入 */
function insert() {
  var user = new User({
    userId: 0,
    userName: 'nickname',
    userPwd: '123123',
  });
  user.save(function (err, res) {
    if (err) {
      console.log("Error:" + err);
    } else {
      User.update({
        _id: res['_id']
      }, {
        $inc: {
          userId: +1
        }
      }, (err, res) => {
        if (err) {
          console.log("error:" + err);
        } else {
          console.log("res：" + res);
        }
      })
      // console.log("Res:" + res);
    }
  });
}

insert();


// User.update({
//   _id: '5e57cacf0d162b11b440f422'
// }, {
//   $inc: {
//     userId: +1
//   }
// }, (err, res) => {
//   if (err) {
//     console.log("error:" + err);
//   } else {
//     console.log("res：" + res);
//   }
// })
