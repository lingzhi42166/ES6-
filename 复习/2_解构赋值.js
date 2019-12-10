/*
* 分解解构并赋值
*
* */

/*在ES6之前 我们想要获取数组或对象的值只能通过索引或着属性*/
/*var arr = [1,2,3];
var a = arr[0];
var b = arr[1];
var c = arr[2];
console.log(a,b,c);//1 2 3*/

/*ES6中提供了解构赋值的模式
* 1、等式两边模式要一样  如 [a,b,c] = [,,,]   {a,b,c} = {,,,}
* 但是变量和值不要求模式一样 如 [a,b,c] = [{},,]
* 2、可以指定默认值
* 其原理就是只要模式相同 值就会赋值到对应的位置
*/

// let arr = [1,2,3];
// let [a,b,c] = arr;
// console.log(a,b,c);//1 2 3

// let [a,b,c] = [{a:1,b:2},1,2];
// console.log(a,b,c);//{ a: 1, b: 2 } 1 2

/*下面的例子就可以看出 只要两边模式相同 就会赋值到对应的位置*/
// let [a,[b,c],d] = [1,[2,3],4];
// console.log(a,b,c,d);// 1 2 3 4   这里的[b,c] 和等号的对面的[2,3] 模式相同 所以一一对应赋值
// let [x,y,z] = [1,[2,3],4];
// console.log(x,y,z);// 1 [2,3] 4   这里的y和等号对面的[2,3] 不是用一个模式 所以不会一一赋值


/*指定默认值*/
let [x,y] = [1];
console.log(x,y);//1 undefined

let [a,b = 2] = [1];
console.log(a,b);//1,2

/*对象的解构赋值
* 通过变量名一一对应
* */
let {name,age} = {name : "rick"};
console.log(name, age);//rick undefined

let {name2,age2=100} = {name2:"rick"};
console.log(name2,age2);//rick 100

//如果变量名和属性名不一样 我们就需要下面的写法
let {name3:myname3,age3:myage3} = {name3:"Rick",age3:19};
console.log(myname3,myage3);//Rick 19

let {name3:myname4,age4=100} = {name3:"Rick"};
console.log(myname4,age4);//Rick 100
