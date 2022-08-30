import { Collection, CreateRole, Query } from 'faunadb'
import { adminCollectionName } from '../collections/admins'
import { officialMapsCollectionName } from '../collections/official-maps'

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
      }
    },
  ],
})
