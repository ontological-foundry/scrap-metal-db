import { CreateCollection } from 'faunadb'

export const userMapsCollectionName = 'user-maps'

export default CreateCollection({
  name: userMapsCollectionName,
})
