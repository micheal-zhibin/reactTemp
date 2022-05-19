const path = require('path');

const config = {
  target: "web",
  entry: {
    main: [__dirname + '/src/main.tsx']
  },
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    port: 8000,
    client: {
      logging: 'info',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
    ]
  },
  plugins: [
    new (require('html-webpack-plugin'))({
      template: path.join(__dirname, './public/index.html')
    })
  ],
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename], // 当你 CLI 自动添加它时，你可以忽略它
    },
  },
  experiments: {
    topLevelAwait: true,
    lazyCompilation: true,
  }
};

module.exports = config;
