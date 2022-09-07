import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
} from '@mui/material'
import ArialRegular from '/public/static/fonts/ArialforKnowit-Regular.otf'
import ArialBold from '/public/static/fonts/ArialforKnowit-Bold.otf'

interface MuiBase {
  defaultProps?: ComponentsProps['MuiCssBaseline']
  styleOverrides?: ComponentsOverrides['MuiCssBaseline']
  variants?: ComponentsVariants['MuiCssBaseline']
}

export const baseline: MuiBase = {
  styleOverrides: `
  canvas {height: 100%!important}
  @font-face {
    font-family: 'ArialRegular';
    src: url(${ArialRegular});
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    
  }
  @font-face {
    font-family: 'ArialRegular';
    src: url(${ArialBold});
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }
    `,
}
