module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json'
  ],
  testMatch: [
    '<rootDir>/test/*.test.js',
    '<rootDir>/**/*.test.js',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2|pdf)$': '<rootDir>/node_modules/jest-transform-stub',
    '^.+\\.(cjs|mjs|js|jsx)?$': '<rootDir>/node_modules/babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ]
}
