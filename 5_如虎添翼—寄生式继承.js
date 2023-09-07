// 寄生式继承
const { inheritObj } = require("./4_洁净的继承者—原型式继承") /* 导入 */
/* import { inheritObj } from "./4_原型式继承" esmodule语法 */
const surperBook = {
    bookName: "js book",
    alikeBook: ["css book", "html book"]
}
function createSub(obj) {
    const o = inheritObj(obj)
    o.getName = function () { /* 给子对象添加了私有方法 */
        console.log(this.bookName);
    }
    return o
}
const sub = createSub(surperBook)
sub.getName()
/* 寄生式继承就说对原型继承的第二次封装，对继承对象进行了扩展，就像寄生虫一样寄托在某一个对象内部生长，这种思想的作用是为了寄生组合式继承模式的实现 */