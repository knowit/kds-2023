const path = require('path')
const withFonts = require('next-fonts')
const withReactSvg = require('next-react-svg')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outdir, distdir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/CallForPresentations': { page: '/CallForPresentations' },
      //'/Registration': { page: '/Registration' },
      '/Faq': { page: '/Faq' },
      '/CodeOfConduct': { page: '/CodeOfConduct' },
      '/Practicalities': { page: '/Practicalities' },
      '/AboutKds': { page: '/AboutKds' },
      '/Talks': { page: '/Talks' },
      '/Location': { page: '/Location' },
      '/Schedule': { page: '/Program' },
      '/Logo': { page: '/Logo' },
    }
  },
}

module.exports = withReactSvg(
  withFonts({
    ...nextConfig,
    include: path.resolve(__dirname, 'public'),
  })
)
