var _this = this;

/* 
    箭头函数    "=>" 定义函数  
*/
let f = v => v + 1;
/*  
    function f(v){
        return v
    }
*/
console.log(f(1));

// 多个参数就通过()包裹  没有参数 就通过() 代替参数部分
let f1 = () => 1;
console.log(f1());

// 当代码块的语句多于1条 则通过{}包裹着
let f2 = (value, ...arg /*,value2*/) => {
    //...可以是包裹操作符 包裹操作符就把接下来的所有值都通过一个数组包裹起来 导致value2是没有值的
    console.log(value);
    console.log(...arg); //也可以是展开操作符 =>把数组的值都遍历了出来 通过一个字符串返回出来 并且只能在表达式中使用
    console.log(arg);
};
let arr = [2, 3];
f2(1, ...arr);

// 还可以通过解构赋值
let f3 = ({ value, value1 }) => {
    return value + value1;
};
console.log(f3({ value: 1, value1: 2 }));

let f4 = ([value, value1]) => {
    return value + value1;
};
console.log(f4([1, 2]));

// 自执行函数
(() => {
    console.log("这是自执行函数 通过箭头函数 看起来整洁多了");
})();
// 回调函数
function fn(cb) {
    // setTimeout(cb(),0); 当程序运行这里的时候 cb()就直接执行了 只要看到() 就是直接执行 
    setTimeout(cb, 0);
}
// fn();
fn(() => {
    console.log("这是回调函数,也是简洁！");
});

/* 
    注意事项:
        （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

        （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

        （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数 也就是... 代替。

        （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
*/
let fn2 = () => {
    console.log(_this);
};
fn2(); //是在全局window 下定义的 所以是window

function fn3() {
    setTimeout(() => {
        console.log(this);
    }, 0);
    // ((v1,v2)=>{
    //     console.log(this);
    //     console.log(arguments); 箭头函数不支持通过arguments获取到参数 只能通过...
    // })(1,2)
    ((...arg) => {
        console.log(this);
        console.log(...arg);
    })(1, 2);
}
// fn3(); fn3是在window下定义的 箭头函数又是在fn3定义的
fn3.call({}); //修改fn3的this

// ==========================================箭头函数end=============================================

/* 
    函数的参数允许定义默认值了
*/
let fn4 = (value = 1, value1 = 2) => {
    console.log(value, value1);
};
fn4(2);
fn4();

let fn5 = ({ x, y } = {}) => {
    // 上面定义的默认是{} => {undefined,undefined} 也就是上面的{x,y} = {} 其实就是解构赋值一样 
    console.log(x, y); //1 undefined  首先 下面解构的时候 因为y没有对应的值 所以解构失败 赋值undefined  并且形参定义了默认值{} 也没有赋值 所以解构的时候 也是undefined
};
fn5({ x: 1 });
fn5(); //如果不给默认值 那么这里不传入参数 就会报错！ 安全性问题！