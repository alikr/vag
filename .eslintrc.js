// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  settings: {
    'import/resolver':{
      webpack:{
        "config": "./webpack.config.js"
      }
    }
  },
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'indent': 0,
    'quotes': 0,
    'semi': 0,
    'import/no-duplicates': 0,
    'no-new': 0,
    'no-mixed-spaces-and-tabs': 0,
    'comma-dangle': 0,
    'camelcase': 0,
    'no-unused-expressions': 0,
    'no-tabs': 0,
    'space-before-function-paren': 0,
    'key-spacing':0,
    'no-trailing-spaces':0,
    'space-before-blocks':0,
    'comma-spacing':0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}