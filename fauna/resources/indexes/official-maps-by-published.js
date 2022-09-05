import { Collection, CreateIndex } from 'faunadb'
import { officialMapsCollectionName } from '../collections/official-maps'

export const officialMapsByPublishedIndexName = 'official-maps-by-published'
export default CreateIndex({
  name: officialMapsByPublishedIndexName,
  source: Collection(officialMapsCollectionName),
  terms: [{ field: ['data', 'published'] }],
  values: [{ field: ['ref'] }, { field: ['data', 'name'] }],
})
