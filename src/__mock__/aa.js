// __mocks__/fs.js
'use strict';

const aa = {
}
const testOne = () => {
    return 1;
};
aa.testOne = testOne;

module.exports = aa;