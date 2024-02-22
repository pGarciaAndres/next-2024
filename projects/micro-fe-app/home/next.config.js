const NextFederationPlugin = require('@module-federation/nextjs-mf')
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks'
  return {
    remote: `remote@http://localhost:3001/_next/static/${location}/remoteEntry.js`
  }
}
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        exposes: {},
        shared: {},
        extraOptions: {
          exposePages: true
        }
      })
    )

    return config
  }
}
