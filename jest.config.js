module.exports = {
  preset: 'react-native',
  setupFiles: [
    './__tests__/__mocks__/react-native-vector-icons.js',
    './__tests__/__mocks__/assets.js',
  ],
  testMatch: ['**/__tests__/**/*.test.tsx'],
  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native|@react-navigation)/)'],
};
