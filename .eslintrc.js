module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  errors: {
    'no-console': 'error'
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
  ],
}
