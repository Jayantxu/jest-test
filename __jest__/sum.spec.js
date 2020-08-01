/**
 * 第一章，使用匹配器
 */
import functions from '../src/sum.js';

test('求和_二加二_返回4', () => {
	expect(functions.sum(2, 2)).toBe(4);
});
test('测试_toBeEqual_返回对象', () => {
    const data = {'one': 1};
    data.two = 2;
    expect(data).toEqual({one: 1, two: 2});
})
test('求和_二加二_返回不等于0', () => {
    expect(functions.sum(2, 2)).toBe(4);
    expect(functions.sum(2, 2)).not.toBe(0);
});

test('常量0_测试真实性_结果', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('测试数字_测试匹配等价器_结果', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); // 大于
    expect(value).toBeGreaterThanOrEqual(3.5); // 大于等于
    expect(value).toBeLessThan(5); // 小于
    expect(value).toBeLessThanOrEqual(4.5); // 小于等于
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4); // 等于
    expect(value).toEqual(4); // 等于
});
test('测试_.not.toMatch匹配_结果', () => {
    expect('test').not.toMatch(/I/);
});
test('测试_toMatch匹配_结果', () => {
    expect('Christoph').toMatch(/stop/);
});

// 数组与可迭代
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];
  
test('测试_toContain可迭代_结果', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
});

test('测试_数组可迭代_结果', () => {
    let arr = ['a', 'b', 'c', 'd'];
    expect(arr).toContain('d');
});


// 测试错误
function getThrow() {
    throw new Error('i am error');
}

test('测试_抛出错误_结果', () => {
    expect(getThrow).toThrow();
    expect(getThrow).toThrow(Error);
    expect(getThrow).toThrow('i am error');
    expect(getThrow).toThrow(/am/);
});