let result = [1,2,3].map(x => x + 2);
console.log(result);
console.log("测试热跟新,默认先访问index.html,如果没有就返回一个error页面");
document.body.innerHTML = "测试热跟新,默认先访问index.html,如果没有就返回一个error页面,如果想要访问别的页面 通过修改访问地址 也就是请求那个页面";