/* 
	Iterator:遍历器
		Javascript原有表示集合的数据结构主要有 数组(Array)、对象(object)
        在ES6中又新添了Map(类对象)、Set(类数组)

        Iterator(遍历器)是一种机制、接口。为不同的数据结构提供一种访问机制(接口)
        任何数据结构只要有Iterator接口，就可以遍历

        Iterator 的作用有三个：
        一是为各种数据结构，提供一个统一的、简便的访问接口；
        二是使得数据结构的成员能够按某种次序排列；
        三是 ES6 创造了一种新的遍历命令for...of循环，
        Iterator 接口主要供for...of消费。


        Iterator遍历过程:
            1、创建一个指针对象，指向当前数据结构的起始位置。遍历器本质上就是一个指针对象
            2、第一次调用next方法，会将指针指向数据结构的起始成员 并返回指针对象
            3、第二次调用next方法，会将指针指向数据结构的第二个成员 并返回指针对象
            4、以此类推，直到遍历完数据结构所有成员

            指针对象有两个属性value和done   value是当前成员的值 done是布尔值 表示遍历是否结束

 */
/*
* makeIterator传入一个数组 然后返回一个有next方法的对象
* */
let arr = [1, 2, 3, 4, 5, 6];
let it = makeIterator(arr);
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Iterator的原理实现  就是返回一个遍历器对象 该对象具有一个next方法   
function makeIterator(array) {
    let nextIndex = 0;
    return {
        /*next: () => {
            console.log(this);
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {value: undefined, done: true};
        }*/
        next: function () {
            console.log(this);
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } :
                { value: undefined, done: true };
        }
    }
}

let obj = {
    [Symbol.iterator]: function () {
        let nextIndex = 0;
        return {
            /* next: function () {
                console.log(this)
                return nextIndex < this.length ?
                    {value: this[nextIndex++], done: false} :
                    {value: undefined, done: true};
            } */
            next: () => {
                console.log(this)
                return nextIndex < this.length ?
                    { value: this[nextIndex++], done: false } :
                    { value: undefined, done: true };
            }
        }
    },
    a: "a",
    length: 1
};
for (let i of obj) {
    console.log(i)
}
// console.log(obj[Symbol.iterator]().next());

for (let i in obj) {
    console.log(i)
}

for (let i of arr) {
    console.log(i);
}

arr.forEach((value, index, arr) => {
    console.log(value, index, arr);
});



