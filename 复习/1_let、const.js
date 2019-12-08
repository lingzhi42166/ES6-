/*
* 声明和定义的区别:
*   从编译原理上来说，声明是仅仅告诉编译器，
*   有个某类型的变量会被使用，
*   但是编译器并不会为它分配任何内存。而定义就是分配了内存。
* 1、var的特点:
*   1、是声明定义变量的  不能用来定义常量
*   2、可以重复声明
*   3、存在变量提升的概念
*   4、没有块级作用域  比如if(){var a;} a也是定义在全局的
* 2、let的特点
*   1、用来声明定义变量
*   2、同一个变量名不能重复声明  避免了命名冲突
*   3、必须先声明后才能使用变量 否则报错
*   4、声明的变量只在声明的代码块内有效
*       ES6之前只有两种作用域:
*           1、全局作用域
*           2、函数
*   那么有了let的这个特性,那么就多了一个块级作用域。也就是只要{}包裹的 对于let来说都是一个单独的作用域
*   5、暂时性死区:
*       只要在块级作用域中使用了let声明变量，那么就会绑定该作用域，即使还没有定义前使用了该变量
*   并且该变量在全局中也有一个，也是会报错。
*   因为let必须声明了该变量后才能使用。否则摆错。
*   6、for循环中有一个特别之处，就是设置循环变量的那一部分是该循环结构的父级作用域，
*   而循环体内部是子作用域，是两个作用域。
*
* 3、const的特点:
    基本与let一直，最大的区别就是const是定义常量的 定义后不可重新赋值
* */

/*比较一:let不可以重复声明  而var可以*/
var a = 1;
var a = 2;
console.log(a);//2

let b = 1;
// let b = 2; Identifier 'b' has already been declared  标识符“b”已经声明

/*比较二：块级作用域 */
if (true) {
    var a = 3;//全局中声明
}
console.log(a);//3

if (true) {
    let a = 4;//只当前代码块中生效===>块级作用域
    console.log(a);//4
}
console.log(a);//输出的是全局变量a的值  3

/* 比较三：变量提升 */
console.log(c);//undefined
var c = 5;

// console.log(d); Cannot access 'd' before initialization 无法在初始化c之前访问
let d = 2;

/* 比较四：暂时性死区 */
{
    var a = 5;//var没有块级作用域
}
console.log(a);

{
    //对于let来说这就是一个块级作用域，并且变量在声明的时候就绑定了该区域，但是只要在声明之前使用该变量都会报错
    // console.log(d);//Cannot access 'd' before initialization
    let d = 1;
}

/* 比较五：for循环 */
var arr = [];
for (var i = 0; i < 10; i++) {//这里声明的i是全局的
    arr[i] = function () { //此时定义的该函数的上级作用域的是全局作用域
        console.log(i);
    }
}
arr[0]();//10   
arr[9]();//10

for(let i = 0; i<10; i++){//该循环体设置变量的地方是循环体的父级作用域
    // 循环体内是子作用域
    arr[i] = function(){ //此时定义的函数的上级作用域是循环体的父级作用域
        console.log(i);
    }
}
arr[0]();//0
arr[9]();//9

/* const */
const cst = 1;
//cst = 2;//TypeError: Assignment to constant variable. 类型错误:赋值给常量变量。