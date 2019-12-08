/*
    按照一定的模式,从数组和对象中提取值 对变量进行赋值 称之为解构赋值

    数组解构赋值:
        let [a,b,c] = [1,2,3]
        从数组中取值 按照对应的索引位置 进行赋值
        本质上 这种写法是 模式匹配 只要等号两边的模式相同,就会被赋予对应的值

    对象结构赋值:
        let {a,b} = {a:1,b:2}
        更数组解构赋值很重要的不同是 数组解构赋值是根据对应的索引位置赋值的
        而对象没有次序,变量必须和属性相同,才能得到正确的值 否则赋值undefined

        解构可以指定默认值,只有当解构的值完全等于 === undefined 默认值才会生效

    函数的参数也可以解构赋值:
        function test([x,y]、{x,y}){}
        test([1,2])  test({1,2})


    注意:
        解构赋值是浅拷贝  是拷贝这个值的引用地址
*/

//以往的变量赋值
var a = 1,
    b = 2,
    c = 3;
console.log(a,b,c);

//ES6数组解构赋值 h没有对应的值 也就是没有解构成功  h就是undefined
let [d,f,g,h] = [1,2,3];
console.log(d,f,g,h);
//只要模式相同 即可解构 赋予对应的值
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);
// ... 代表是用[]包裹着剩下的值 再赋值给对应的变量
let [head, ...tail] = [1, 2, 3, 4];
let [head1,  ,...tail1] = [1, 2, 3, 4];
console.log(tail,tail1);//[2, 3, 4],[3, 4]
console.log(tail);
//如果是复制完后 通过...变量 那就是展开数组里的值 也就是遍历了出来
console.log(...tail);//2 3 4


/*
    允许有默认值 但是前提数组成员严格等于undefined 也就是===undefined 默认值才生效
*/
let [m1,m2=2] = [1];
//此时右边的数组 只有一个成员 在解构的时候 第二个是解构不成功 就undefined
// 但是变量有默认值 所以就判断需要解构的数组的第二个成员是否 ===undefined 是的话 默认值才生效
console.log(m1,m2);//1 2
let [m3=3] = [undefined];
let [m4=4] = [null];
//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，只有当一个数组成员严格等于undefined，默认值才会生效，否则就赋值解构数组里的值。
console.log(m3,m4);//3 null


// 用途 具体看es6文档 这里列一个

// 交换变量值  不再需要中间变量
let [x,y] = [1,2];
console.log(x,y);
[x,y] = [y,x];
console.log(x,y);





