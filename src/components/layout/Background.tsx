import { Box } from '@mui/material'
import Image from 'next/image'
import { useContext } from 'react'
import { BackgroundContext } from './Layout'
import { backgroundTypes } from './useDefineBackground'
import downwardImage from '../../../public/static/images/DotPattern3.jpg'
export const Background = () => {
  const [backgroundUsed] = useContext(BackgroundContext)
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: '-10',
      }}
    >
      <BackgroundSelector background={backgroundUsed} />
    </Box>
  )
}

const BackgroundSelector = ({
  background,
}: {
  background: backgroundTypes
}) => {
  switch (background) {
    case 'map':
      return (
        <Image
          src={'/static/images/Main_DotPattern.jpg'}
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          alt='Dotmap image of Denmark, highlighting Copenhagen in pink'
        />
      )
    case 'upward':
      return (
        <Image
          src={'/static/images/DotPattern1.jpg'}
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          alt='Black backround with abstract colored dots'
        />
      )
    case 'upwardLeft':
      return (
        <Image
          src={'/static/images/DotPattern2.jpg'}
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          alt='Black backround with abstract colored dots'
        />
      )
    case 'downwardRight':
      return (
        <Image
          src={downwardImage}
          layout='intrinsic'
          objectPosition='top'
          quality='100'
          sizes={'100vw'}
          alt='Black backround with abstract colored dots'
        />
      )
    case 'soft1':
      return (
        <Image
          src={'/static/images/DotPattern4.jpg'}
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          alt='Black backround with abstract colored dots'
        />
      )
    case 'soft2':
      return (
        <Image
          src={'/static/images/DotPattern5.jpg'}
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          alt='Black backround with abstract colored dots'
        />
      )
    case 'downwardLow':
      return (
        <Image
          src={'/static/images/DotPattern6.jpg'}
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          alt='Black backround with abstract colored dots'
        />
      )
  }
}
