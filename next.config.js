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
      '/CallForPresentations': { page: '/callForPresentationsPage' },
      '/Registration': { page: '/registrationPage' },
      '/CodeOfConduct': { page: '/codeOfConductPage' },
      '/Practicalities': { page: '/practicalitiesPage' },
      '/AboutKds': { page: '/aboutKdsPage' },
    }
  },
}

module.exports = withReactSvg(
  withFonts({
    ...nextConfig,
    include: path.resolve(__dirname, 'public'),
  })
)
