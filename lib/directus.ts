import { Directus } from '@directus/sdk'
import { DirectusCollection } from '../src/types'

const directus = new Directus<DirectusCollection>(
  'https://ylop7zcb.directus.app/'
)

export default directus
