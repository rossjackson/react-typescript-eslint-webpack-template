module.exports = function (api) {
  api.cache(true)

  // Check NODE_ENV - webpack sets this based on mode
  const isDevelopment = process.env.NODE_ENV !== 'production'

  return {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          regenerator: true,
        },
      ],
      // Add react-refresh plugin only in development
      ...(isDevelopment ? ['react-refresh/babel'] : []),
    ],
  }
}
