module.exports = {
    setupFilesAfterEnv: [],
    collectCoverageFrom: [
        '**/*.js',
        '!**/node_modules/**',
        '!**/*.test.js',
        '!**/coverage/**',
        '!index.js',
        '!.eslintrc.js',
        '!jest.config.js',
        '!api-test/**',
    ],
    coverageThreshold: {
        global: {
            statements: 90,
        },
    },
};
