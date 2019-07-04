const config = require('./config.json');
module.exports = function(api) {
  api.cache(true);
  const babelConfig = {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          // "root": ["./assets"],
          alias: {

          },
          extensions: [".ios.js", ".android.js", ".js", ".json"],
        },
      ],
    ],
  };

  if(!config.isEjected) {
    babelConfig.plugins[0][1].alias['react-native-device-info$'] = './mocks/DeviceInfoMock';
  }
  return babelConfig
};
