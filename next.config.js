const withCss = require('@zeit/next-css')
const nextCss = require('@zeit/next-less')
const withPlugins = require('next-compose-plugins');
const _nextCss = [
  nextCss,
  {
    cssModules: true,
  },
];
const _withCss = [
  withCss,
  {
    cssModules: false,
  },
];
const nextOption={
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
};
module.exports = withPlugins([_nextCss, _withCss], nextOption);