const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config.dev-server');

config.entry.unshift(`webpack-dev-server/client?http://localhost:${config.devServer.port}/`);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {});

server.listen(config.devServer.port);
