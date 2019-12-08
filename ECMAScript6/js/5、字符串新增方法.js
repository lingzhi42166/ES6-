/* 
    判断一个字符是否在一个字符串中:
        includes()：返回布尔值，表示是否找到了参数字符串。
        startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
        endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
*/
let str = "hello world";
console.log(str.includes("h"));//true
console.log(str.startsWith("h"));//true 
console.log(str.startsWith("e"));//false
console.log(str.endsWith("d"));

/* 
    重复输出字符串:
        repeat()   repeat=>重复
        该方法返回一个新的字符串  不影响原字符串
        原理 获取this的值 存入一个新的空字符串 然后根据传入的参数 进行拼接 然后返回出去 如果没有传值 那么就是返回一个空的字符串
*/
let str1 = "hello";
console.log(str1.repeat(2));//hellohello
console.log(str1.repeat());// "" 空
console.log(str1.repeat(2.9));//如果是小数则向下取整 如果是负数 则会报错
console.log(str1)//hello

/* 
    消除头部和尾部多余的空格
        trimStart()=>消除头部多余空格
        trimEnd()=>消除尾部多余空格
        都是返回新的字符串  不会修改原字符串
*/
let str2 = ` hello world `;
console.log(str2.trimStart());
console.log(str2.trimEnd());
