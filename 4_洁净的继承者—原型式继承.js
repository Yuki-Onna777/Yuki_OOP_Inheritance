// 原型式继承 
// 该继承是实现对象之间的继承，为下面的寄生式继承做了铺垫，因为想要实现类之间的继承，实质上是让父类原型和子类原型这两个对象之间产生关系
// 2006年道格拉斯提出一种F式函数继承，其目的是不需要父类new出实例，我们自己创建出这样一个实例对象
/* export { inheritObj } esmodule语法 */
function inheritObj(o) { /* 传入一个父对象 */
    function F() { }
    F.prototype = o
    return new F() /* return出子对象，实现对象之间继承 */
}
const surperObj = {
    name: "yuki",
    age: 20,
    friends: ['kebo', 'kd', 'james', 'curry'],
    running() { console.log(7) },
}
const subObj = inheritObj(surperObj) /* 拿到子对象 */
surperObj.friends.push("rocket")
subObj.friends.push("沸羊羊与美羊羊")
console.log(surperObj.friends, subObj.friends); /* [ 'kebo', 'kd', 'james', 'curry', 'rocket', '沸羊羊与美羊羊' ] */
subObj.running() /* 7 */
// 上述inheritObj函数是实现对象之间继承的关键，实际上这和Object.create()方法一样，但是前者兼容性更强就像Object.getPrototypeOf()和__proto__一样，前者有的浏览器可能会出现不兼容的情况
module.exports = { inheritObj } /* 导出inheritObj函数吗，方便下面的js文件使用，请在node下运行，如果在浏览器下运行请用esmodule语法 */