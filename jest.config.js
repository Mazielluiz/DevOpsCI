import 'jest-preset-angular/setup-jest';

module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    moduleFileExtensions: ['ts', 'html', 'js', 'json', 'jsx', 'node'],
    transform: {
        '^.+\\.(ts|html)$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest'
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.spec.json',
            stringifyContentPathRegex: '\\.html$',
            astTransformers: {
                before: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer']
            }
        }
    },
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testTimeout: 30000
};