/**
 * 计时器mock
 * 🙄
 */
import timeMock from "../src/timeMock.js";

jest.useFakeTimers(); // 模拟计时器函数

// 运行所有计时器   jest.runAllTimers()
test('测试_计时器mock延时一秒_结果', () => {
    // const timerGame = require('../src/timeMock.js');
    const timerGame = timeMock.timerGame;
    const callback = jest.fn();

    timerGame(callback);

    // 在这个时间点，定时器的回调不应该被执行
    expect(callback).not.toBeCalled();

    // “快进”时间使得所有定时器回调被执行
    jest.runAllTimers(); // 与 useFakeTimers连用

    // // 现在回调函数应该被调用了！
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
});

// 使用runOnlyPendingTimers(), 避免一直运行


// 前进 X ms 时间, advanceTimersByTime
it('断言_前进秒数用于测试_结果', () => {
    const advanceTime = timeMock.infiniteTimerGame;
    const callB = jest.fn();

    advanceTime(callB);

    expect(callB).not.toBeCalled(); // 这个时候 cb还未运行
    
    jest.advanceTimersByTime(500); // 前进 500 ms 也还未运行
    expect(callB).not.toBeCalled(); // 这个时候 cb还未运行

    jest.advanceTimersByTime(600); // 在前进600ms
    expect(callB).toBeCalled();
});