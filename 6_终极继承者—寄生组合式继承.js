// 寄生组合式继承
const { inheritObj } = require("./4_洁净的继承者—原型式继承") /* 导入 */
function surperClass(name) {
    this.name = name
    this.friends = ['kebo', 'kd', 'james', 'curry']
}
function subClass(name, time) {
    surperClass.call(this, name) /* 借用构造函数 */
    this.time = time
}
function inheritPro(subClass, surperClass) {
    const p = inheritObj(surperClass.prototype) /* 核心代码 */
    p.constructor = subClass
    subClass.prototype = p
    /* 注意：如果上述直接写成subClass.prototype = inheritObj(surperClass.prototype)则无法确保子类原型中构造器的存在，所以需要用p先保存一份inheritObj中return的对象 */
}
inheritPro(subClass, surperClass) /* 实现寄生式继承 */
/* 在寄生式继承中子父类的prototype不要重新赋值为一个新对象 */
surperClass.prototype.getName = function () {
    console.log(this.name);
}
subClass.prototype.getTime = function () {
    console.log(this.time);
}
const ins1 = new subClass("js book", 2014)
const ins2 = new subClass("css book", 2013)
ins1.friends.push("rocket")
console.log(ins1.friends); /* ['kebo', 'kd', 'james', 'curry', 'rocket'] */
console.log(ins2.friends); /* ['kebo', 'kd', 'james', 'curry'] */
ins2.getTime() /* 2013 */
ins2.getName() /* css book */
// 可以看出这就是终极继承者——寄生组合式继承！
