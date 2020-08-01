/**
 * mock
 *  测试
 */
import mockFcun from "../src/mockFun.js"
const cb = jest.fn(x => 42+x);
mockFcun.forEach([0, 1], cb);

test('测试_moc数据_结果', () => {
    expect(cb.mock.calls.length).toBe(2);
});

// .mock属性

test('测试_mock数据调用次数_结果', () => {
    expect(cb.mock.calls.length).toBe(2);
});

test('测试_mock数据第一个传参_是0', () => {
    expect(cb.mock.calls[0][0]).toBe(0);
}); 

test('测试_mock数据第二个传参_是1', () => {
    expect(cb.mock.calls[1][0]).toBe(1);
});

test('测试_mock数据一个返回结果_是42', () => {
    expect(cb.mock.results[0].value).toBe(42);
});


// 模拟模块
// 例如mock axios 的返回
/**
 import axios from 'axios';
 import Users from './users';
 jest.mock('axios');
 test('should fetch users', () => {
   const users = [{name: 'Bob'}];
   const resp = {data: users};
   axios.get.mockResolvedValue(resp);
 
   // or you could use the following depending on your use case:
   // axios.get.mockImplementation(() => Promise.resolve(resp))
 
   return Users.all().then(data => expect(data).toEqual(users));
 });
 */



 // 模拟实现

 // 此处的 MOCKFUN是 return 0; 使用mockImplementation模拟返回42
 jest.mock("../src/mockFunc1.js");
 const MOCKFUN = require("../src/mockFunc1.js");
 MOCKFUN.mockImplementation(() => 42);
 test('测试_mockFoo数据返回_结果42', () =>{
    expect(MOCKFUN()).toBe(42);
 });


 // 多个函数的模拟实现
 // 以上使用  mockImplementationOnce 进行了mock 数据, 分别对两次的数据返回进行了同结果的mock
 const mockFuncfnTest = jest
 .fn()
 .mockImplementationOnce(cb => cb(null, true))
 .mockImplementationOnce(cb => cb(null, false));

 test('测试_多个mock的链式模拟实现_结果', () => {
    expect(mockFuncfnTest((a, b) => {return b})).toBeTruthy();
 })
 test('测试_多个mock的链式模拟实现_结果', () => {
    expect(mockFuncfnTest((a, b) => {return b})).toBeFalsy();
 })
 
 
 // 设置了 默认行为 的 模拟实现
 const myMockFn = jest
 .fn(() => 'default')  // 此处是默认行为
 .mockImplementationOnce(() => 'first call')
 .mockImplementationOnce(() => 'second call');
 
test('测试_有默认行为的mock实现_第一次调用结果first call', () => {
    expect(myMockFn(() => {})).toEqual('first call');
})
test('测试_有默认行为的mock实现_第二次调用结果second call', () => {
    expect(myMockFn(() => {})).toEqual('second call');
})
test('测试_有默认行为的mock实现_第三次调用默认行为结果default', () => {
    expect(myMockFn(() => {})).toEqual('default');
})


// 模拟名称
