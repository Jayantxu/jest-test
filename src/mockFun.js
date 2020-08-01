/**
 * mock 功能
 * 👏
 */
// 一个运行函数
export default {
    forEach(items, callback) {
        for (let index = 0; index < items.length; index++) {
            callback(items[index]);
        }
    },
    foo() {
        return 0;
    }
}