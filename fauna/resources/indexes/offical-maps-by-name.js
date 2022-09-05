import { Collection, CreateIndex } from 'faunadb'
import { officialMapsCollectionName } from '../collections/official-maps'

export default CreateIndex({
  name: 'official-maps-by-name',
  source: Collection(officialMapsCollectionName),
  terms: [{ field: ['data', 'name'] }],
  unique: true,
})
