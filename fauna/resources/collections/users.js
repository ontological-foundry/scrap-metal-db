import { CreateCollection } from 'faunadb'

export const userCollectionName = 'users'

export default CreateCollection({
  name: userCollectionName,
})
