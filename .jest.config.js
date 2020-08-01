/**
 * jest config option
 * 😁
 * url: https://doc.ebichu.cc/jest/docs/zh-Hans/configuration.html
 * https://jestjs.io/docs/zh-Hans/configuration
 */
module.exports = {
	automock: false,
	bail: false, // 失败后是否停止测试
	collectCoverage: true, // 是否收集测试时的覆盖率信息,可能减慢测试执行速度
	coverageDirectory: '.coverage', // 测试覆盖文件的输出目录
	globals: {}, // 一组全局对象，在所有测试环境中都可访问
	verbose: true, //
	moduleFileExtensions: [
		'js',
		'json',
		'node',
	],
	transform: {
		'^.+\\.js$': 'babel-jest',
	}
};
