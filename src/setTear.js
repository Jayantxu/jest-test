let val = 'aaa';
export default {
    beforeEachFunc() {
        val = 'bbb';
    },
    afterEachFunc() {
        val = 'aaa';
    },
    judgeVal(oldVal) {
        return oldVal === val;
    }
}