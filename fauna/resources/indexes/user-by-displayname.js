import { Collection, CreateIndex } from 'faunadb'
import { userCollectionName } from '../collections/users'

export default CreateIndex({
  name: 'user-by-displayname',
  source: Collection(userCollectionName),
  terms: [{ field: ['data', 'displayname'] }],
  unique: true,
})
