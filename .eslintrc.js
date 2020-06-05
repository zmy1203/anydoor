module.exports = {
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "rules": {
      "no-console": ["error", {
        "allow": ["warn", "error", "info"]
      }],
      "no-empty-function": "error"
    },
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "script"
    },
    "globals": {
      "window": true
    },
    "env": {
      "browser": false,
      "node": true,
      "es6": true,
      "mocha": true
    }
};
