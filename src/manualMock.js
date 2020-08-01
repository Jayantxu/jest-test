/**
 * 手动mock
 * 模拟数据，手动模拟假数据
 */
// FileSummarizer.js
'use strict';

const aa = require('./__mock__/aa.js');

function manualMockFun(directory) {
    const result = aa.testOne(); // 这里的fs 是一个第三方模块，例子
    return result;
}

exports.manualMockFun = manualMockFun;