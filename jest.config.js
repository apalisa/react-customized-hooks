module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
    collectCoverage: true,
    coverageDirectory: 'coverage'
}
  