/*  
    set的是新的数据结构  类似于数组,但是区别于数组的是 所有成员是唯一的 不允许有重复的值
    set是一个构造函数 生成set数据结构  接收一个数组作为参数

    重点:
        Set不是数组 是类似于数组 是一个新的数据结构 所有成员是唯一的
*/
let set = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6, 1, 2, 3, 4, 5, 6]);
console.log(set);

let set2 = new Set();
[1, 2, 3, 4, 5, 6, 6, 6, 6, 1, 2, 3, 4, 5, 6].forEach(i => set2.add(i));
console.log(set2);

/*  
    size是Set构造函数的原型对象上的属性 返回的是实例成员的数量
    Set.prototype.size
*/
console.log(set2.size);

/*  
    Set实例的方法:
        add(value)：添加某个值，返回 Set 结构本身。
        delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
        has(value)：返回一个布尔值，表示该值是否为Set的成员。
        clear()：清除所有成员，没有返回值。
*/
console.log(set2.add(1)); //因为Set数据结构的原因 所有成员都是唯一的  所以通过add添加相同的值的时候 是无法添加进去的
console.log(set2.delete(1));
console.log(set2.has(1));
console.log(set2.clear());
console.log(set2);

console.log([1, 2, 3, 4, 5, 6, 6, 6, 6, 1, 2, 3, 4, 5, 6].forEach((value, key) => console.log(key, value)));