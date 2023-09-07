// 借用构造函数继承
function surperClass() {
    this.running = function () { console.log(7) }
    this.friends = ['kebo', 'kd', 'james', 'curry']
}
function subClass() {
    surperClass.call(this) /* 借用构造函数继承核心代码 */
}
const ins2 = new subClass()
const ins1 = new subClass()
ins1.running() /* 7 */
ins2.running() /* 7 */
ins1.friends.push('rocket')
console.log(ins1.friends); /* [ 'kebo', 'kd', 'james', 'curry', 'rocket' ] */
console.log(ins2.friends); /* [ 'kebo', 'kd', 'james', 'curry' ] */
/* 优点：friends是每个子类实例所私有的属性；缺点：此方法不涉及原型所以每个子类实例不能共用一个running方法，违背了代码复用原则，所以有了组合式继承 */