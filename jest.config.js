module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/test/**/*.spec.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  transform: {
    '.*\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.*\\.ts$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
}

module.exports = {
}
