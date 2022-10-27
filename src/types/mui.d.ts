declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    tag: true
    tagSelected: true
    roundButton: true
    navigationButton: true
  }
}
declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    transparent: true
    glass: true
  }
}
// You may have issues discovering this module declaration file if no imports/exports occur
// eslint-disable-next-line import/no-anonymous-default-export
export default ''
