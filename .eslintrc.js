module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['react-native'],
  rules: {
    'react-native/no-inline-styles': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-single-element-style-arrays': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
