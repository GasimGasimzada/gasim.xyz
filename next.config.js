/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   webpack: function (config) {
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
    )
    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/posts',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
