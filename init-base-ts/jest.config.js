module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  // testRegex: '/__tests__/jest/.*\\.(j|t)sx?$',
  testMatch: [
    "<rootDir>/test/**/?(*.)(spec|test).ts?(x)"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/lib',
    '<rootDir>/scratch',
    '<rootDir>/template',
    '<rootDir>/src',
    '<rootDir>/docs',
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
}

