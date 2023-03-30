const config = {
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = config;

//**********KCD CONFIG***************** */

// const path = require('path')

// module.exports = {
//   testEnvironment: 'jest-environment-jsdom',
//   setupFilesAfterEnv: [
//     '@testing-library/jest-dom/extend-expect',
//     path.join(__dirname, '__tests__')
//   ],
//   resetMocks: true,
//   moduleDirectories: ['node_modules', path.join(__dirname, '__tests__')],
//   watchPlugins: [
//     'jest-watch-typeahead/filename',
//     'jest-watch-typeahead/testname',
//     'jest-watch-select-projects',
//   ],
// }