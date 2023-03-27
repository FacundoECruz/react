/** @type {import('jest').Config} */
const config = {
  verbose: true,
};

module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  preset: '@babel/preset-env'
};

module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  }
};

module.exports = {
  testEnvironment: 'jsdom'
};


module.exports = config;