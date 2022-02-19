module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        indent: ["error", 4],
        "linebreak-style": 0,
        quotes: ["error", "double"],
        semi: ["error", "always"],
    },
    globals: {
        __base: true,
        __dirname: true,
    },
};
