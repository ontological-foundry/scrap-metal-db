import { Collection, CreateIndex } from 'faunadb'
import { userCollectionName } from '../collections/users'

export default CreateIndex({
  name: 'user-by-email',
  source: Collection(userCollectionName),
  terms: [{ field: ['data', 'email'] }],
  unique: true,
})
