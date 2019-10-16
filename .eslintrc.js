module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "browser": true,
  },
  "plugins": [
    "svelte3",
  ],
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
  ],
  "rules": {
    "space-infix-ops": "error",
    "keyword-spacing": "error",
    "comma-spacing": "error",
    "arrow-spacing": "error",
    "newline-before-return": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1}],
    "space-in-parens": ["error", "never"],
    "indent": ["error", 2, {"SwitchCase": 1}],
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "brace-style": ["error"],
    "curly": "error",
    "quotes": ["error", "single"],
    "key-spacing": [2, { beforeColon: false, afterColon: true }],
    "object-curly-spacing": ["error", "always", { "objectsInObjects": false }],
    "semi": ["error", "never"],
    "comma-dangle": "error",
    "array-bracket-spacing": ["error", "never"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  "overrides": [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    },
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2019,
  },
    "globals": {
    "NODE_ENV": true,
    "API_URL": true,
    "__DEV__": true
  }
}
module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "browser": true,
  },
  "plugins": [
    "svelte3",
  ],
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
  ],
  "rules": {
    "space-infix-ops": "error",
    "keyword-spacing": "error",
    "comma-spacing": "error",
    "arrow-spacing": "error",
    "newline-before-return": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1}],
    "space-in-parens": ["error", "never"],
    "indent": ["error", 2, {"SwitchCase": 1}],
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "brace-style": ["error"],
    "curly": "error",
    "quotes": ["error", "single"],
    "key-spacing": [2, { beforeColon: false, afterColon: true }],
    "object-curly-spacing": ["error", "always", { "objectsInObjects": false }],
    "semi": ["error", "never"],
    "comma-dangle": "error",
    "array-bracket-spacing": ["error", "never"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  "overrides": [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    },
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2019,
  },
    "globals": {
    "NODE_ENV": true,
    "API_URL": true,
    "__DEV__": true
  }
}


