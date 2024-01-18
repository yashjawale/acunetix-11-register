/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://acunetix11.streamlit.app/',
        permanent: false
      },
    ]
  },
}

module.exports = nextConfig
