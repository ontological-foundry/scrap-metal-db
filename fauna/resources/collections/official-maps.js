import { CreateCollection } from 'faunadb'

export const officialMapsCollectionName = 'official-maps'
export default CreateCollection({
  name: officialMapsCollectionName,
})
