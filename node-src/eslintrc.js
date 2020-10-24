module.exports = {
    "extends": "airbnb-base",
    "rules": {
      "indent": ["error", 2],
      "linebreak-style": "off",
      "no-underscore-dangle": ["error", { "allow": ["__set__"] }],
      "no-return-await": "off",
      "max-len": ["error", {"code": 120, "ignoreStrings": true, ignoreTemplateLiterals: true}],
      "object-curly-newline": ["off"],
    },
    "env": {
      "jest": true,
      "mocha": true,
      "es6": true,
      "node": true
    },
    "parserOptions": {
      "ecmaVersion": 2018,
    }
  };
