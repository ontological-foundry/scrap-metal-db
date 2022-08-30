import { CreateIndex, Collection } from 'faunadb'
import { adminCollectionName } from '../collections/admins'

export default CreateIndex({
  name: 'admin-by-username',
  source: Collection(adminCollectionName),
  terms: [{ field: ['data', 'username'] }],
  unique: true,
})
