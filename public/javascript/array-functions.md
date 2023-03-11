---
title: 数组方法
date: 2023-03-09
tags: [Web开发, JavaScript, 面试题目]
cover: "https://imgbed.codingkelvin.fun/uPic/fH8XrP.png"
top_img: false
categories: [文章分享, Web开发]
---
#### 数组的增删操作(不改变原数组)
##### 1.join (原数组不受影响)   
该方法可以将数组里的元素,通过指定的分隔符,以字符串的形式连接起来。   
返回值: 返回一个新的字符串

##### 2.split (原数组不受影响)   
该方法是用过指定的分隔符,将字符串分割成数组。
返回值: 返回一个新的数组

#### 数组的增删操作(直接改变原数组)
##### 3. push
该方法可以在数组的最后面,添加一个或者多个元素
结构: arr.push(值)
返回值:返回的是添加元素后数组的长度.

##### 4. pop
该方法可以在数组的最后面,删除一个元素
结构: arr.pop()
返回值:返回的是刚才删除的元素.

##### 5. unshift
该方法可以在数组的最前面,添加一个或者几个元素
结构: arr.unshift(值)
返回值: 返回的是添加元素后数组的长度

##### 6. shift
该方法可以在数组的最前面,删除一个元素
结构: arr.shift()
返回值: 返回的是刚才删除的元素.

### 数组的翻转和排序(改变数组)

##### 7. sort(函数)
返回值：排序后的数组。
说明：如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。

##### 8. reverse( )
定义：reverse() 方法用于颠倒数组中元素的顺序。
语法：arrayObject.reverse( )
说明：该方法会改变原来的数组。

##### 9. forEach( )
forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
forEach(): 没有返回值，本质上等同于 for 循环，对每一项执行 function 函数。是变异性方法。
注意: forEach() 对于空数组是不会执行回调函数的。
语法：array.forEach(function(currentValue, index, arr), thisValue)；
currentValue（必需，数组中的元素。）
注：forEach() 本身是不支持的 continue 与 break 语句的，我们可以通过 some 、 every、try catch 来实现。
使用return 语句实现 continue 关键字的效果：
例：
```js
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (item) {
    if (item === 3) {  //元素等于3的时候跳过
return;
}
    console.log(item); //1,2,4,5
});
```

使用try catch实现break
例：
```js
try {
var array = ["first","second","third","fourth"];        // 执行到第3次，结束循环
array.forEach(function(item,index){
if (item == "third") {
    throw new Error("EndIterative");
}
    alert(item);// first,sencond
}); 
} catch(e) { 
    if(e.message!="EndIterative") throw e; 
};
```

使用erery()实现break
```js
var arr = [1,2,3,4,5]; 
var num = 3; 
arr.every(function(v){
    if(v == num) {
        return false;
    }else{ 
        console.log(v); 
        return true;
    }
});
```

### 非变异方法 
#### 1.filter( )
定义：filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。    
语法：arrayObject.filter(function(currentValue,index,arr),thisValue)
function(currentValue, index,arr)	必须。函数，数组中的每个元素都会执行这个函数    
函数参数:

参数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;描述   
currentValue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;必须。当前元素的值   
index&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可选。当前元素的索引值   
arr	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可选。当前元素属于的数组对象   
thisValue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。   
如果省略了 thisValue ，"this" 的值为 "undefined"

#### reduce
[reduce](https://blog.csdn.net/U_Are_My_Halo/article/details/89321683)