/* 
	ES5 的对象属性名都是字符串，这容易造成属性名的冲突。
	比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。
	如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因。
			
	Symbol是一种新型的原始数据类型 表示独一无二的值
	通过Symbol() 生成  	
	
	因为生成的 Symbol 是一个原始类型的值，不是对象。所以不能添加属性。
	基本上，它是一种类似于字符串的数据类型。
	test = Symbol("test")    test==> Symbol(test)
	test.toString()  ==>  "Symbol(test)"
	
 */

/* 
 s1和s2都是Symbol函数的返回值，而且参数相同，但是它们是不相等的。
 Symbol 值不能与其他类型的值进行运算，会报错。
*/
let s1 = Symbol("test");
let s2 = Symbol("test");
/* 
	对象的属性名可以有两种类型  一种是原来一直使用的字符串类型 一种就是现在的Symbol类型
	因为每一个Symbol都是必然不相等的 所以用来做属性名就不怕冲突 防止覆盖
*/
let obj = {
	s1 : ()=>{
		console.log(s2);
	}
}
//此时的s1变量 就是Symbol(test)  注意不能用.获取属性  因为通过.获取的  内部会隐式转为字符串的  obj.s1 ==> obj["s1"]    obj[s1] ==> obj["Symbol(test)"]
obj[s1] = ()=>{   
	console.log(s1);
}
obj[s2] = ()=>{   
	console.log(s2);
}
console.log(obj);//{s1: ƒ, Symbol(test): ƒ}
obj.s1();
obj[s1]();