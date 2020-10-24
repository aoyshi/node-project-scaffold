module.exports = {
    setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.js'],
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
