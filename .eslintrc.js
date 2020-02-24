module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base', 'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
<<<<<<< HEAD
    //"no-unsaved-vars": ["error", { "argsIgnorePattern": "next"}],
=======
    "no-unused-vars": ["error", { "argsIgnorePattern": "next"}],
>>>>>>> 00e0613de10b459aad39c24aae0a0b7f1f7d0f37
  },
};
