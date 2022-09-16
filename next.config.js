const path = require('path')
const withFonts = require('next-fonts')
const withReactSvg = require('next-react-svg')

module.exports = withReactSvg(
  withFonts({
    publicRuntimeConfig: {
      appInsightsIntrumentalKey: process.env.APP_INSIGHTS_INSTRUMENTALKEY,
    },
    include: path.resolve(__dirname, 'public'),
  })
)
