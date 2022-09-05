import { Collection, CreateRole, Index, Query, Select } from 'faunadb'
import { adminCollectionName } from '../collections/admins'
import { officialMapsCollectionName } from '../collections/official-maps'
import { officialMapsByPublishedIndexName } from '../indexes/official-maps-by-published'

export default CreateRole({
  name: 'admin',
  membership: [
    {
      resource: Collection(adminCollectionName),
    },
  ],
  privileges: [
    {
      resource: Collection(officialMapsCollectionName),
      actions: {
        read: true,
        create: true,
        write: Query(
          oldData => Select(['data', 'published'], oldData) === false
        ),
      },
    },
    {
      resource: Index(officialMapsByPublishedIndexName),
      actions: {
        read: true,
      },
    },
  ],
})
