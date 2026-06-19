module.exports = {
  preset: '@react-native/jest-preset',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/theme/index.ts',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native|@react-navigation|react-native-safe-area-context)/)',
  ],
};
