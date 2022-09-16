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
      '/Registration': { page: '/Registration' },
      '/CodeOfConduct': { page: '/CodeOfConduct' },
      '/Practicalities': { page: '/Practicalities' },
      '/AboutKds': { page: '/AboutKds' },
    }
  },
}

module.exports = withReactSvg(
  withFonts({
    ...nextConfig,
    include: path.resolve(__dirname, 'public'),
  })
)
