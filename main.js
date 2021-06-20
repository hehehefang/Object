let obj = {}  //创建一个空对象
let obj2 = { name: 'hefang', age: 26 }
let obj3 = new Object({ name: 'tom', age: 7 })

每个key都是对象的属性名

Object.keys(obj)  //可以得到obj的所有key（属性名）

每个value都是对象的属性值

Object.values(obj2)  //可以得到所有obj2的value（属性值）


如何用变量作属性名

let a = 'name'
let obj4 = { [a]: 'hefang' }

删除属性

delete obj2.name
delete obj2.['name']

//是否含属性名 
有就返回true 没有就返回false
'name' in obj2 === false

含有属性名但是值为undefined
注意obj.xxx === undefined不能断定xxx是否为obj的属性


查看所有属性

Object.keys(obj2)  //查看自身所有属性

console.dir(obj2)  //查看自身+共有属性  或者一次用Object.keys打印出obj2.__proto__

console.entries(obj2)  //查看所有key 和 value

obj2.hasOwnProperty('toString')  //查看属性是自身的还是共有的   自身的返回 true   共有的返回 false

obj2.key //查看属性

obj2.['key']  //区分与 obj2[key]     obj2.key  === obj2['key']  


修改属性

obj2.name = 'undefined'
obj2.['name'] = 'undefined'

obj2.[name] = 'hehehe'  //错误 因为name的值不确定


Object.assign(obj, { name: 'jack', age: 9, gender: 'nan' })  //批量赋值


修改隐藏属性 //不推荐使用obj__proto__

Object.create()

let a = { 爱好: '睡觉', 食物: '米饭' }

let person = Object.create(a)

let person = Object.create(a, { name: { value: 'tom' } }) //如要这时加属性  只能用这样的方式。  当然也能一个一个加或者批量
