const rootWebpackConfig = require('../../../.storybook/webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config = await rootWebpackConfig({ config, mode });
  config.module.rules.push({
    test: /\.stories\.ts?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript',
        },
      },
    ],
    enforce: 'pre',
    include: [path.resolve(__dirname, '../src')],
  });
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [{ from: 'libs/assets/src/lib/images', to: 'assets/images' }],
    })
  );
  return config;
};
