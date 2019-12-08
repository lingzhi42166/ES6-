/* 
    允许直接写入变量和函数作为属性和方法  
    属性名=变量名 属性值=变量值
*/
let [a,b] = [1,2];
function fn(){
    console.log(1);
}
let obj = {a,b,fn};//这里写入的其实是变量和方法  内部处理的时候 属性名=变量名 属性值=变量值
console.log(obj);
console.log(obj.fn);
// 方法也可以简写
let obj1 = {
    fn(){//=>fn:function(){console.log(1)}
        console.log(1);
    },
    fn1 : function(){
        console.log(2);
    }
}
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
        其他地方使用就会报错

        super 关键字的原理:
            当调用的是属性的时候 => Object.getPrototypeOf(this).属性
            当调用的是方法时候 => Object.getPrototypeOf(this).函数.call(this) 把指向改回super的对象 而不是原型对象

        总结:
            super只能在对象方法的简写法内使用 指向的是调用该方法的对象的原型对象
            其内部原理:
                如果通过super调用原型对象的属性=> Object.getPrototypeOf(this).属性
                如果是通过super调用原型对象的方法=> Object.getPrototypeOf(this).方法.call(this) 把this执行修改回super所在的函数所在的对象
                所以当super调用原型对象的方法上有this的时候 指向的不是原型对象 而是 super所在函数所在的对象
*/
let obj3 = {
    a:1,
    fn(){
        (function(){
            console.log(this);//window 这是自执行函数 也就是在windoe对象下执行的
        })()
        console.log(super.a);//打印当前对象的原型对象的a属性  super类似于this指向函数的所在对象一样 super就是指向函数所在对象的原型对象
        Object.getPrototypeOf(this).fn();
        console.log(super.fn());//=>Object.getPrototypeOf(this).fn.call(this)
    },
    fn2(){
        setTimeout(() => {
            console.log(super.a);
            console.log(this);//箭头函数的this 就是函数定义时所在的对象
        }, 0);
    },
    /* 
    下面这两个都会报错 super在这里有意外 也就是不能在这里使用 那就奇怪了 明明是对象的方法 为什么不能用呢,那是因为目前，只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法。
    fn3 : function(){
        console.log(super.a);
    },
    fn4 : ()=>{
        console.log(super.a)
    }  
    */

    //b : super.a//'super' keyword unexpected here  super关键字指向对象的原型对象 只能在对象的方法之中使用 比如上面的fn方法 是对象调用这个方法 所以是对象的方法
}
obj3.__proto__ = { //ES5中 __proto__是提供给对象查看设置自己的原型对象的隐式方法 
    a : "a",
    b : "b",
    fn(){
        console.log(this);
    }
}
obj3.fn();
obj3.fn2();

/* function test() {
    console.log(super.a);
}
window.test(); 不允许这么用 暂时还不知道为什么*/

/*
    Object.getPrototypeOf() 获取对象的原型对象
    以往我们都是通过__proto__属性获取设置对象的原型对象 但是这个是浏览器提供给我们的
    现在ES6给我们通过Object.getPrototypeOf() 方法获取对象的原型对象 所以不推荐使用__proto__的方法了 
*/
let obj4 = {
    
}
console.log(Object.getPrototypeOf(obj4));
console.log(obj4.__proto__ = {x:1});
console.log(Object.getPrototypeOf(obj4));


/* 
    设置对象的原型对象:
        Object.setPrototypeOf(obj(设置其原型的对象), proto(该对象的新原型(一个对象 或 null).));
        getPrototypeOf可以获取对象的原型对象 那么setPrototypeOf可以设置对象的原型对象
        注意:
            这里是指定对象的原型对象为新对象

*/
let obj6 = {

}
Object.setPrototypeOf(obj6,{x:"x"});
console.log(Object.getPrototypeOf(obj6));
console.log(obj6);



/* 
    数组的扩展运算符 ... 在ES2018中也引入进对象中了
*/
let {x,y,...z} = {x:1,y:2,z:3,a:4,b:5,c:6}
console.log(x,y,z);//变量z是解构赋值所在的对象。它获取等号右边的所有尚未读取的键  我称之为包裹运算符
// console.log(...z); 但是对象中的 使用展开运算符的话 就不行 数组就可以



