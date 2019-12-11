/* 
    模板字符串
        `
            这是字符串的内容
            ${这是变量名}
        `
*/
let name = "Rick";
// 标签模板  处理模板字符串的函数
function desc(string,parm1,parm2){
    console.log(arguments);
    console.log(string,parm1,parm2);
    //[ '', ' 哈哈' ] Rick undefined
    //[ '', '哈哈哈', '' ] Rick Rick
}
let str = desc`${name} 哈哈`; //等同于 desc(${name} 哈哈);
let str2 = desc`${name}哈哈哈${name}`;