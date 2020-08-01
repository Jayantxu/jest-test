/**
 * 异步测试
 * 😀
 */
import asyncFun from '../src/async.js';
// 使用Promise
test('测试_Promise异步返回_返回peanut butter', () => {
    return asyncFun.fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('测试_Promise异步返回_返回error', () => {
    return asyncFun.fetechError().catch(e => {
        expect(e).toEqual('error');
    });
});

//以上可以使用 .resolves / .rejects 两个用于  expect内部
test('测试_内部Promise异步返回_返回peanut butter', () => {
    return expect(asyncFun.fetchData()).resolves.toBe('peanut butter');
})
test('测试_内部Promise异步返回_返回error', () => {
    return expect(asyncFun.fetechError()).rejects.toBe('error');
});

// 或者再 test 内部使用await进行等待
test('测试_内部Promise异步返回使用await等待_返回', async () => {
    const data = await asyncFun.fetchData();
    expect(data).toEqual('peanut butter');
});