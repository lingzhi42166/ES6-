/* 
    传统语法中,创建一个实例对象是通过构造函数(类)生成的。
    为了跟接近传统语言的语法,ES6中添加了Class关键字  可以定义一个类
    也是通过new创建实例对象的  但是class类 只能通过new来使用 直接使用会报错

    通过class 定义一个类
    这个类同样有prototype属性  其内部的方法都是定义在Test类的prototype对象上
    这个类里面有一个方法是constructor 相当于是 ES5的Test构造函数 该方法返回的就是实例对象 同样该方法可以自定义返回一个对象
    该方法只要new了这个类 就自动调用这个方法 如果没有显式定义这个方法 那么会被默认添加

    在类里面定义方法 不需要function 可以直接使用对象方法的简写法  并且方法与方法之间不能用,隔开 否则报错
*/
class Test {
    //内部的方法都定义在该类的原型对象上
    constructor() {
        //一旦new的该类 内部就调用该函数 并返回实例对象
        this.x = 1;
        this.y = 2;
        // return "string" 没效果
        // return {} 跟旧语法一样 只能返回一个对象 不是对象类型的都不会返回出去
    }
    //下面这些函数都是定义在该类原型对象上的
    add() {
        return this.x + this.y;
    }
    subtract() {
        return this.y - this.x;
    }
}
let test = new Test();
console.log(test.x, test.y);
console.log(test.add());
console.log(test.subtract());
console.log(Test.prototype);
console.log(test);//跟ES5中构造函数返回的实例对象一样
console.log(test.__proto__);//该对象也可以通过__proto__

/* 
    Object.assign方法可以很方便地一次向类添加多个方法
    Object.assign(需要添加方法的原型对象,{
        fn1(){},
        fn2(){}
    })
*/
Object.assign(Test.prototype, {
    test() {
        console.log("第一次测试assign");
    },
    test2() {
        console.log("第二次测试assign");
    }
})
console.log(test.__proto__);//实例对象同样可以通过浏览器提供的__proto__属性访问自己构造函数的原型对象
console.log(Object.getPrototypeOf(test));//但是ES6中提供了方法 就不建议使用浏览器提供的隐式属性了

/* 
    取值函数（getter）和存值函数（setter）
    还不知道有什么用
*/
class Test1 {
    consturctor() {

    }
    get prop() {
        return "取值函数"
    }
    set prop(value) {
        return value
    }
}
let test1 = new Test1();
console.log(test1.prop);
console.log(test1.prop = "存值函数");


/* 
    类相当于实例的原型 因为类里面的方法都是定义在prototype上的  所以只要是通过这个类new出来的实例 都可以调用类上的方法(继承)
    但是如果我们希望这个类里的某些方法不被继承 那么就可以在方法前 加上static关键字 表示该方法不被继承 只能通过类来调用
    称之为 静态方法  
    那么如果在静态方法上使用this 可想而知 静态方法只能是类调用 所以this自然就指向了类
 
*/
class Test2 {
    constructor() {

    }
    static add() {
        console.log("方法前加上了static 那么就是静态方法 只能类调用,并且this指向的是类" + this)
    }
}
let test2 = new Test2();
Test2.add();
// test2.add();会报错 test2.add is not a function

/* 
    实例属性有一个新写法
    就是写在类的顶部
    好处就是一目了然的看到类有哪些属性

    同时还有静态属性 也是通过static定义的 因为是静态属性 所以只能类自己调用 那么类里面的方法实际上都是实例对象调用的
    所以方法里面也不能使用
*/
/* class Test3 {  babel不给转义成es5 但是浏览器可以
    x = 1;
    y = 2;
    static z = 3;
    add() {
        return this.x + this.y
    }
}
let test3 = new Test3();
console.log(test3.add());
console.log(test3.x, test3.y, test3.z); */

/* 
    私有方法和私有属性的解决方案:
        在以往都是通过 _变量来表示这个是私有属性或方法 但实际上是给程序员看的 本质上还是可以在外部调用的
        那么现在有一个新的提案 就是在私有属性或方法前面 添加一个#表示是私有的
*/
/* 
    class Test4 {
        #a;
    }
    let test4 = new Test4();
    console.log(test4.x); 
    浏览器报错呀 不能测试呀 具体看ES6手册呀
*/
