// 组合式继承
function surperClass() {
    this.friends = ['kebo', 'kd', 'james', 'curry'] /* 把子类实例私有的属性放在这里 */
}
function subClass() {
    surperClass.call(this) /* 借用构造函数继承 */
}
surperClass.prototype = {
    running() { console.log(7) }, /* 把子类实例共用的方法放在这里 */
    constructor: surperClass
}
subClass.prototype = new surperClass() /* 类式继承 */
const ins2 = new subClass()
const ins1 = new subClass()
ins1.running() /* 7 */
ins2.running() /* 7 */
ins1.friends.push("rocket")
console.log(ins1.friends); /* [ 'kebo', 'kd', 'james', 'curry', 'rocket' ] */
console.log(ins2.friends); /* [ 'kebo', 'kd', 'james', 'curry' ] */
/* 这种继承方式沿用了前两种方式的优点，但是第6行和第12行都执行了一遍父类构造函数，所以还不是最完美的！ */