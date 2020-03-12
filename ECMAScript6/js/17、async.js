/* 
    async函数是Generator函数的语法糖

    async function test(){
        await ...
    }
    async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
    async函数返回一个 Promise 对象
*/

//async语法
const asyncTest = async function () {
    const f1 = await 1;
    const f2 = await 2;
    console.log(f1);
    console.log(typeof f1);
    console.log(f1.toString());
    console.log(f2.toString());
};
console.log(asyncTest);
console.log(asyncTest());//返回的是resolve状态的promise对象