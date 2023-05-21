module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  rules: {
    'no-console': 'error',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
  ],
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
}
