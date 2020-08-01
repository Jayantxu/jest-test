/**
手动 mock 假数据
🙄
.
├── config
├── __mocks__
│   └── fs.js
├── models
│   ├── __mocks__
│   │   └── user.js
│   └── user.js
├── node_modules
└── views
 */

'use strict';

describe('测试_manualMock模块aa_结果', () => {
    const manualMock = require("../src/manualMock.js");

    const fileSummary = manualMock.manualMockFun();
    test('测试_估计是失败的写法_求正确的manualMock写法', () => {
        expect(fileSummary).toBe(1);
    });
});
 