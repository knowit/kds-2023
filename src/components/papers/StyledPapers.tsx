import { Paper, styled } from '@mui/material'

export const GlassPaper = styled(Paper)({
  backgroundColor: 'rgba(255,255,255,0.01)',
  backdropFilter: 'blur(5px)',
  padding: '1rem',
  maxWidth: '750px',
})

export const TransparentPaper = styled(Paper)({
  backgroundColor: 'transparent',
  padding: '1rem',
  maxWidth: '750px',
})
