module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: ['airbnb-base', 'airbnb-typescript', 'plugin:react/recommended'],
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    'no-console': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
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
