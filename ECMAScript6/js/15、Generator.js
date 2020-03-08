/* 
Generator 函数是 ES6 提供的一种异步编程解决方案
Generator 函数是一个状态机，封装了多个内部状态。
执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
*/

/* 
    下面定义了一个Generator函数
    内部有两个yield表达式
    即该函数有三个状态：hello，world 和 return 语句（结束执行）
    Generator 函数的调用方法与普通函数一样，
    也是在函数名后面加上一对圆括号。不同的是，
    调用 Generator 函数后，该函数并不执行，
    返回的也不是函数运行结果，而是一个指向内部状态的指针对象，
    也就是上一章介绍的遍历器对象（Iterator Object）。

    必须调用遍历器对象的next方法，使得指针移向下一个状态。
    也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，
    直到遇到下一个yield表达式（或return语句）为止。
    换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，
    而next方法可以恢复执行。
*/
function* helloWolrdGenerator() {
    console.log("one-next");
    console.log("下面碰到yield暂停执行,需要再次next");
    yield "hello";
    console.log("two-next");
    yield "world";
    console.log("three-next");
    return "ending";
}
console.log(helloWolrdGenerator());
let hwG = helloWolrdGenerator();
let one = hwG.next();//第一次调用内部指针就从函数头部 
let two = hwG.next();
let three = hwG.next();
console.log(one, two, three);

/* 
yield 表达式
由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。

遍历器对象的next方法的运行逻辑如下。

（1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。

（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。

（3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。

（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

*/

/* 实现斐波那契数列 */
// function fib(max){
//     // max为最大值 [1,1,2,3,5]
//     let [a,b] = [1,1];
//     let arr = [a,b];  
//     while (arr.length<max) {
//         [a,b] = [b,a+b];
//         arr.push(b);
//     }
//     return arr
// }
// console.log(fib(5));

// 通过Generator实现斐波那契数列
function* fib(max) {
    let [a, b] = [1, 1], n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n++;
    }
    return
}
let fibResult = fib(5);
console.log(fibResult.next());
console.log(fibResult.next());
console.log(fibResult.next());
console.log(fibResult.next());
console.log(fibResult.next());
console.log(fibResult.next());
