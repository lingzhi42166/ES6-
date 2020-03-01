
/* 
    （1）默认指向定义它时，所处上下文的对象的this指向。即ES6箭头函数里this的指向就是上下文里对象this指向，
    偶尔没有上下文对象，this就指向window
 
    （2）即使是call，apply，bind等方法也不能改变箭头函数this的指向
*/
function test() {
    return function test2() {
        console.log(this);
        (() => {
            console.log(this);
        })()
    }
}
let fn = test();
// let fn2 = fn.bind(test);//bind 修改this指向  并返回修改后的函数
// fn2();//因为通过bind修改了test2的this指向  那么箭头函数又是定义在test2中的 也就是箭头函数定义的上下文是test2 又因为test2修改了this指向为test 箭头函数的this指向上下文的this对象 所以指向为test
fn.call(test);//call 执行该函数 并将其this指向为指定对象
fn();

let person = () => {
    console.log(this);
}
person();
person.call(test);//call apply bind 也无法改变箭头函数的this指向

function person1() {
    (() => {   //定义在person1函数对象内 所以person1是该箭头函数的上下文对象 所以该箭头函数的this指向为person1的this指向
        console.log(1);
        console.log(this);
    })();
}
person1();
person1.call(test);

