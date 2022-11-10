import { Box, SxProps } from '@mui/material'
import Image from 'next/image'
import { useContext } from 'react'
import { BackgroundContext } from './Layout'
import downwardImage from '../../../public/static/images/DotPattern3.jpg'
import { BackgroundTypes } from '../../types/backgroundTypes'

export const Background = () => {
  const [backgroundUsed] = useContext(BackgroundContext)

  const getPositionalProps = (background: BackgroundTypes) => {
    switch (background) {
      case 'upwardLeft':
      case 'soft1':
      case 'soft2':
      case 'downwardLow':
        return { position: 'absolute', bottom: 0, right: 0 }
      case 'upward':
        return { position: 'absolute', bottom: 0 }

      default:
        return {}
    }
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        zIndex: '-10',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box sx={getPositionalProps(backgroundUsed) as SxProps}>
        <BackgroundSelector background={backgroundUsed} />
      </Box>
    </Box>
  )
}

const BackgroundSelector = ({
  background,
}: {
  background: BackgroundTypes
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
          layout='intrinsic'
          width={1920}
          height={1080}
          quality='100'
          objectFit='cover'
          className='object-center object-cover pointer-events-none'
          alt='Black backround with abstract colored dots'
        />
      )
    case 'upwardLeft':
      return (
        <Image
          src={'/static/images/DotPattern2.jpg'}
          layout='intrinsic'
          width={1920}
          height={1080}
          quality='100'
          objectFit='cover'
          alt='Black backround with abstract colored dots'
        />
      )
    case 'downwardRight':
      return (
        <Image
          src={downwardImage}
          layout='intrinsic'
          width={1920}
          height={1080}
          quality='100'
          objectFit='cover'
          className='object-center object-cover pointer-events-none'
          alt='Black backround with abstract colored dots'
        />
      )
    case 'soft1':
      return (
        <Image
          src={'/static/images/DotPattern4.jpg'}
          layout='intrinsic'
          width={1920}
          height={1080}
          quality='100'
          objectFit='cover'
          className='object-center object-cover pointer-events-none'
          alt='Black backround with abstract colored dots'
        />
      )
    case 'soft2':
      return (
        <Image
          src={'/static/images/DotPattern5.jpg'}
          layout='intrinsic'
          width={1920}
          height={1080}
          objectFit='cover'
          objectPosition='top'
          alt='Black backround with abstract colored dots'
        />
      )
    case 'downwardLow':
      return (
        <Image
          src={'/static/images/DotPattern6.jpg'}
          layout='intrinsic'
          width={1920}
          height={1080}
          quality='100'
          objectFit='cover'
          className='object-center object-cover pointer-events-none'
          alt='Black backround with abstract colored dots'
        />
      )
  }
}
