const path = require('path');

module.exports = {
  transpilePackages: ['antd'],
  output: 'export', // Add this line to enable static export
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@'] = path.resolve(__dirname);
    }

    // Add CSS loader configuration
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    });

    // Add Less loader configuration
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    });

    return config;
  },
};
