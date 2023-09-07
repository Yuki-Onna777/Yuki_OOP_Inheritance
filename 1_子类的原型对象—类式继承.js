// 类式继承
function surperClass() {
    this.friends = ['kebo', 'kd', 'james', 'curry']
}
function subClass() { }
surperClass.prototype = { /* 注意：此行代码如果写成一个对象不能与第10行代码颠倒，写成属性则没事,原因在于=后面的对象是一个新的对象并非原来的父类原型对象 */
    running() { console.log(7) },
    constructor: surperClass /* 更加准确一点的话应该用Object.defineProperty()方法设置 */
}
subClass.prototype = new surperClass() /* 类式继承核心代码 */
const ins1 = new subClass()
const ins2 = new subClass()
ins1.running() /* 7 */
ins2.running() /* 7 */
ins1.friends.push('rocket')
console.log(ins1.friends); /* [ 'kebo', 'kd', 'james', 'curry', 'rocket' ] */
console.log(ins2.friends); /* [ 'kebo', 'kd', 'james', 'curry', 'rocket' ] */
// 缺点：当实例化另外一个ins2对象时，通过ins1.friends改变friends数组，那么ins2.friends也会改变（实质上是共同改变了父类实例对象上的friends数组）