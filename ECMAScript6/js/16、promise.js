let promiseTest = new Promise((resolve,reject)=>{
    /* 
        resolve,reject两个状态
        resolve成功 返回一个resolve状态的promise对象
        reject失败 返回一个reject状态的对象
    */
    reject(0);//如果是reject状态 后面没有对应的回调函数解决对应的错误的话 就会报错 但不影响外部程序执行
}).then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
})
console.log(promiseTest);
// console.log(1);

/* 
    then(resolveCallback,rejectCallback):
        then函数是promise的方法
        如果promise对象是resolve状态的话 则执行resolveCallback
        reject状态的话 则执行rejectCallback
        要注意的是 如果在执行resolveCallback有错误信息的话 rejectCallback 是不会捕捉到的 所以一般都不使用rejectCallback 而是在后面再使用catch

        默认返回值 为 resolve状态的promise对象
        可自定义return 一个promise对象 除此之外 自return的值 都作为下一个回调函数的参数

    catch(rejectCallback):
        catch函数是promise的方法  
        用于注册Promise对象状态为rejected时的回调函数  
        如果promise对象是reject状态的 并调用了该方法 则捕捉到错误信息  错误信息都通过参数 传递给回调函数
        如果在此方法之前先调用了then方法 并且传入了rejectCallback的话 则会被前面的捕捉
        
        promise对象的错误信息 有冒泡机制 错误总是会被下一个catch语句捕获 如果没有被捕捉 则自动在浏览器报错 错误信息通过catch捕捉  就不会通过浏览器报错  值得注意的是 Promise内部错误 即使是通过浏览器报错 也不会影响到Promise外部的代码执行  如果没有 则自动通过浏览器报错 但不会影响后面的程序执行
        
*/