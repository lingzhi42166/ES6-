"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* 
    for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象
    （比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。
    一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）
    原生具备 Iterator 接口的数据结构如下。
        Array
        Map
        Set
        String
        TypedArray
        函数的 arguments 对象
        NodeList 对象


        一些数据结构没有(比如对象)
        凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。


        总结:
            for of 遍历数组和set的话 都是返回成员值
            如果遍历的是Map的话 返回的是一个数组 分别是键名和键值
*/

/* 
    数组的遍历
*/
var arr = [1, 2, 3];
// for in 是给对象 遍历属性名的   如果遍历数组 则是获取到的是索引
for (var key in arr) {
    console.log(key);
}
// forEach 是遍历数组的  提供两个参数给回调函数  一个是数组的成员值 一个是成员索引
arr.forEach(function (value, key) {
    console.log(value, key);
});
// for of 在数组的应用  返回的是 数组的成员值 如果需要获取索引 去看ES6的数组的扩展
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;

        console.log(value);
    }

    /*
        对象的遍历
        好吧 现在还不知道怎么通过for of 遍历对象
    
    console.log("==========对象的遍历==========");
    let obj = {
        x : 1,
        y : 1,
        [Symbol.iterator] : function () {
            return {
              next: function () {
                return {
                  value: 1,
                  done: true
                };
              }
            };
        }
    }
    // for in 遍历出对象的属性
    for(let key in obj){
        console.log(key);
    }
    // for of在对象的应用
    for(let value of obj){
        console.log(value);
    }
    */

    /* 
        set Map 的遍历
        发现set的索引是从1开始的
    */
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log("==========set Map 的遍历==========");
var set = new Set([1, 2, 3]);
set.forEach(function (value, key) {
    console.log(value, key);
});

/* set 不能通过for in遍历
for (let key in set) {
    console.log(key);
} */
// for of 在set的应用 返回的是set的成员值
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = set[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _value = _step2.value;

        console.log(_value);
    }

    /* 
        通过for of 遍历 Map 结构时，返回的是一个数组，
        该数组的两个成员分别为当前 Map 成员的键名和键值。
    
        但是通过forEach返回的是 第一个参数是属性值 第二个参数是属性
    */
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var map = new Map([["x", 1], ["y", 2]]);
console.log(map);
map.forEach(function () {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
        arr[_key] = arguments[_key];
    }

    //通过包裹操作符 把可以遍历的都包裹在一个新的数组里
    console.log(arr);
});
map.forEach(function (value, key) {
    console.log(value, key);
});
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _value2 = _step3.value;

        console.log(_value2); //返回的是一个数组
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = map[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            _key2 = _step4$value[0],
            _value3 = _step4$value[1];

        console.log(_key2, _value3); //返回的是一个数组
    }
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}
//# sourceMappingURL=11、for of.js.map