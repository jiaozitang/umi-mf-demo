const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const {ModuleFederationPlugin} = require('webpack').container

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'test'
        }),
        new ModuleFederationPlugin({
            name: 'app1',
            filename: 'remoteEntry.js',
            exposes: {
                './Home': './src/..'
            },
            shared: [{
                'react': {
                    eager: true
                }, 
            }, {
                'react-dom': {
                    eager: true
                }
            }]
        })
    ],
    devServer: {
        // 告诉服务器从哪里提供内容，只有在你想要提供静态文件时才需要。
        static: path.resolve(__dirname, 'dist'),
        hot: true
      },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
  };