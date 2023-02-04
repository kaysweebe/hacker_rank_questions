/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // roots: ['./src'],
  rootDir: './src',
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    }
  },
  verbose: true,
  testMatch: [
    '**/*.jest.ts'
  ],
  // testPathIgnorePatterns: [
  //   "./node_modules"
  // ],
};