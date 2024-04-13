module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@navigator': './src/navigator',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@theme': './src/theme',
          '@types': './src/types',
        },
      },
    ],
  ],
};
