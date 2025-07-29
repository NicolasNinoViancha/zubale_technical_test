module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: false,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@shared': './src/shared',
          '@core': './src/core',
          '@assets': './src/assets',
          '@home': './src/home',
          '@search': './src/search',
          '@marketplace': './src/marketplace',
          '@reels': './src/reels',
          '@profile': './src/profile',
        },
      },
    ],
  ],
};
