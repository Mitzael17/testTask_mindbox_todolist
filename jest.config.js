/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  }
};