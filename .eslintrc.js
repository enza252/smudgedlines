module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  'parserOptions': {
    'parser': 'babel-eslint',
    'sourceType': 'module'
  },
  'rules': {
    'strict': [2, 'global'],
    'no-console': [2, { 'allow': ['error'] }],
    'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
    'space-infix-ops': 2,
    'key-spacing': 2,
    'no-trailing-spaces': 2,
    'eol-last': [2, 'always'],
    'semi': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'object-curly-newline': ['error', {
      'ImportDeclaration': { 'minProperties': 10 }
    }],
    'curly': [2, 'all'],
    'space-before-function-paren': [2, 'always'],
    'no-multi-spaces': 2,
    'quotes': [2, 'single'],
    'eqeqeq': 2,
    'prefer-const': 2,
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'arrow-body-style': [2, 'as-needed'],
    'prefer-arrow-callback': 2,
    'no-var': 2,
    'comma-spacing': 2,
  }
}