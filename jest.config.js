module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,vue}',
    '!**/node_modules/**',
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'vue'],
  modulePaths: ['/node_modules'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  testMatch: [
    '<rootDir>/src/**/*.test.js',
  ],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2|pdf)$': '<rootDir>/node_modules/jest-transform-stub',
    '^.+\\.(cjs|mjs|js|jsx)?$': '<rootDir>/node_modules/babel-jest'
  },
  verbose: true
}
