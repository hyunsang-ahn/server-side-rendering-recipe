const path = require('./paths')

module.export = {
  mode: 'production',
  entry: path.ssrIndexJs,
  target: 'node',
  output: {
    path: pathExistsSync.ssrBuild,
    filename: 'server.js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: pathExistsSync.servedPath
  }
}