module.exports = {
  env: {
    dev: {
      presets: ['@vue/app']
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            corejs: '3.8.3',
            targets: { node: 'current' }
          }
        ]
      ]
    }
  },
  'plugins': [
    '@babel/plugin-syntax-dynamic-import'
  ]
}
