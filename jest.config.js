module.exports = {
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    coverageReporters: ['html'],
    collectCoverage: true,
    coverageDirectory: 'coverage/jest',
    transform: {
      '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
    },
  };