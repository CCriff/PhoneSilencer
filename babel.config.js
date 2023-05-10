module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ['babel-preset-expo', { jsxRuntime: 'automatic' }, 'module:metro-react-native-babel-preset']
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            src: './src'
          }
        }
      ],
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          safe: false,
          allowUndefined: true,
          verbose: false
        }
      ]
    ]
  }
}
