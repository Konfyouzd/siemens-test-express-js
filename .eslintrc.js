module.exports = {
  "extends": ["airbnb-base", "airbnb-typescript/base"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "root": true,
  "parserOptions": {
    "project": "./tsconfig.json",
  },
  "rules": {
    "object-curly-newline": ["error", {
      "ObjectExpression": { "consistent": true }
    }],
  },
};
