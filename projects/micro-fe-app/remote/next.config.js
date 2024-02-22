const NextFederationPlugin = require('@module-federation/nextjs-mf')
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks'
  return {
    home: `home@http://localhost:3000/_next/static/${location}/remoteEntry.js`
  }
}
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        exposes: {
          './button': './components/Button.tsx',
          './pages-map': './pages-map.js'
        },
        shared: {},
        extraOptions: {
          exposePages: true
        }
      })
    )

    return config
  }
}
