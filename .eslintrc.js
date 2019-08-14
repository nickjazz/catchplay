module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true
  },
  extends: ["plugin:vue/essential", "@vue/typescript"], // "@vue/prettier",
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "vue/no-unused-components": "off",
    "no-unused-components": "off"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
