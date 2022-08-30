import { CreateCollection } from 'faunadb'

export const adminCollectionName = 'admins'

export default CreateCollection({
  name: adminCollectionName,
})
