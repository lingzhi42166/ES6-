/* 
    允许直接写入变量和函数作为属性和方法  
    属性名=变量名 属性值=变量值
*/
let [a, b] = [1, 2];
function fn() {
    console.log(1);
}
let obj = { a, b, fn }; //这里写入的其实是变量和方法  内部处理的时候 属性名=变量名 属性值=变量值
console.log(obj);
console.log(obj.fn);
// 方法也可以简写
let obj1 = {
    fn() {
        //=>fn:function(){console.log(1)}
        console.log(1);
    },
    fn1: function () {
        console.log(2);
    }
};
obj1.fn();
obj1.fn1();

let obj2 = {};
obj2["a"] = 1;
console.log(obj2.a); // 通过.调用属性 => ["属性名"]

/* 
    super关键字:
        this关键字总是指向函数所在的当前对象 
        那么super关键字指向对象的原型对象   指向对象内的函数所在对象的原型对象
        
        super只能在对象的方法内使用
        但是 暂时 只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法
        所以super只能在对象方法的简写法内使用

        super 关键字的原理:
            当调用的是属性的时候 => Object.getPrototypeOf(this)
            当调用的是方法时候 => Object.getPrototypeOf(this).foo.call(this) 把指向改回super的对象 而不是原型对象

        总结:
            super只能在对象方法的简写法内使用 指向的是调用该方法的对象的原型对象
            其内部原理:
                如果通过super调用原型对象的属性=> Object.getPrototypeOf(this).属性
                如果是通过super调用原型对象的方法=> Object.getPrototypeOf(this).方法.call(this) 把this执行修改回super所在的函数所在的对象
                所以当super调用原型对象的方法上有this的时候 指向的不是原型对象 而是 super所在函数所在的对象
*/
let obj3 = {
    a: 1,
    fn() {
        (function () {
            console.log(this); //window 这是自执行函数 也就是在windoe对象下执行的
        })();
        console.log(super.a); //打印当前对象的原型对象的a属性  super类似于this指向函数的所在对象一样 super就是指向函数所在对象的原型对象
        Object.getPrototypeOf(this).fn();
        console.log(super.fn()); //=>Object.getPrototypeOf(this).fn.call(this)
    },
    fn2() {
        setTimeout(() => {
            console.log(super.a);
            console.log(this); //箭头函数的this 就是函数定义时所在的对象
        }, 0);
    }
};
obj3.__proto__ = { //ES5中 __proto__是提供给对象查看设置自己的原型对象的隐式方法 
    a: "a",
    b: "b",
    fn() {
        console.log(this);
    }
};
obj3.fn();
obj3.fn2();

/* function test() {
    console.log(super.a);
}
window.test(); 不允许这么用 暂时还不知道为什么*/