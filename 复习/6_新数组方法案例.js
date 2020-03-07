/* 
    注册页面 判断所有input内容长度是否大于0
    利用数组的every方法 所有成员执行完回调函数返回true 才为真
    面向对象写
*/

// ES5
function Filed(value){
    this.value = value;
}
Filed.prototype.validate = function(){
    // console.log(this);
    return this.value.length > 0 
}
var username = new Filed("123");
var username1 = new Filed("1234");
var username2 = new Filed("1235");
var onOff = username.validate();
var onOff1 = username.validate();
var onOff2 = username.validate();
console.log(onOff,onOff1,onOff2);

// ES6
let arr = [username,username1,username2];
let onOff3 = arr.every((id)=>{
    return id.validate()
});
console.log(onOff3);

