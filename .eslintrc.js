module.exports = {
  extends: ['prettier'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  globals: {
    VERSION: true
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-octal-escape': 0
  }
};
