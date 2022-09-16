declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    transparent: true
    glass: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    rounded: true
    navigation: true
  }
}
