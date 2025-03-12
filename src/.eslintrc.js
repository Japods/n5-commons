export default {
    env: {
        browser: true,
        es2021: true,
        "vitest/globals": true // 
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    plugins: ["react", "vitest"], // 
    rules: {
    }
};