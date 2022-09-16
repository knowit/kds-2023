import { useState } from 'react'

export type backgroundTypes =
  | 'map'
  | 'upward'
  | 'upwardLeft'
  | 'downwardRight'
  | 'soft1'
  | 'soft2'
  | 'downwardLow'

export const useDefinedBackground = () => {
  const [backgroundUsed, setBackgroundUsed] = useState<backgroundTypes>('map')

  return {
    backgroundUsed,
    setBackgroundUsed,
  }
}
