/*
    添加了遍历器接口=>可以遍历字符串
    for...of
*/
for (let codePonit of "off") {
    console.log(codePonit);
}
//遍历的原理
var it = makeIterator(['a', 'b']);

console.log(it.next()); // { value: "a", done: false }
console.log(it.next()); // { value: "b", done: false }
console.log(it.next()); // { value: undefined, done: true }


function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex > array.length ? { value: "undefined", done: true } : { value: array[nextIndex++], done: "false" };
            //    注意这里nextIndex++ 因为是后++ 所以是先赋值后相加 也就是第一次++ =>array[0] 然后++ 等于 1 所以下一次 nextIndex是1
        }
    };
}

/*
    模板字符串
        ES5中拼接字符串是一件麻烦且容易出错的体力活
        在ES6中新添了模板字符串
        还支持定义多行字符串 空格和换行，都是被保留的 如果首行是空白 直接换行的话也是会有换行效果的 不想要这个换行，可以使用trim方法消除它。
        语法`string`
        `string ${这里是变量} string`
        通过 ${} 大括号内不仅可以放变量  是可以放任何javascript表达式  大括号内部，就是执行 JavaScript 代码
*/
let test = "test!";
let str = `
这是模板字符串的${test}
,好鸡儿厉害呀！！
还是可以是多行的,
要是想在模板字符串中使用反引号\` 那就的通过反斜杠转义,
这样拼接DOM节点的时候 那是相当的舒服呀！！
`.trim();
console.log(str);

// ${}可以放入js任何表达式  还可以调用函数   
function fn() {
    console.log("函数");
    return "函数";
}
let obj = { x: 1, y: 2 };
let str2 = `${obj.x + obj.y}${fn()}`;
console.log(str2);

// 大括号内部，就是执行 JavaScript 代码 所以括号内是一个字符串 就会原样输出
let str3 = `${"hello world"}`;
let str4 = `${"''"}`;
console.log(str3, str4);

// 模板编译
let template = `
<%for(let i = 0; i<10; i++{%>
    <p><%=i%></p>
<%}%>
`;