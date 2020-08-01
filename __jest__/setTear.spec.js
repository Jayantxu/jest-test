/**
 * Setup & Teardown
 * 😜
 */
// 多次测试的重复设置 
 import setTearFun from "../src/setTear.js";
beforeEach(() => {
    // console.log('1 - beforeEach');
    setTearFun.beforeEachFunc();
});
afterEach(() => {
    // console.log('1 - afterEach');
    setTearFun.afterEachFunc();
});
test('测试_测试前调用beforeEach_结果', () => {
    expect(setTearFun.judgeVal('bbb')).toBeTruthy();
});


// 一次性设置 before 和 after
beforeAll(() => {
    // console.log('1 - beforeAll')
    setTearFun.beforeEachFunc();
});
afterAll(() => {
    // console.log('1 - afterAll')
    setTearFun.afterEachFunc();
});
test('测试_测试前调用beforeAll_结果', () => {
    expect(setTearFun.judgeVal('bbb')).toBeTruthy();
});

/**
 * 作用域测试
 * 结果:
// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
*/
// test('', () => console.log('1 - test'));
// describe('测试_内部作用域测试_结果', () => {
    // beforeAll(() => console.log('2 - beforeAll'));
    // afterAll(() => console.log('2 - afterAll'));
    // beforeEach(() => console.log('2 - beforeEach'));
    // afterEach(() => console.log('2 - afterEach'));
    // test('', () => console.log('2 - test'));
// });


