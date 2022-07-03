import {
  And,
  Collection,
  ContainsPath,
  CreateRole,
  CurrentIdentity,
  Equals,
  Get,
  Let,
  Not,
  Or,
  Query,
  Select,
  Var,
} from 'faunadb'
import { userMapsCollectionName } from '../collections/user-maps'
import { userCollectionName } from '../collections/users'

export default CreateRole({
  name: 'player',
  membership: [
    {
      resource: Collection(userCollectionName),
    },
  ],
  privileges: [
    {
      resource: Collection(userCollectionName),
      actions: {
        read: Query(ref => Equals(CurrentIdentity(), ref)),
      },
    },
    {
      resource: Collection(userMapsCollectionName),
      actions: {
        read: Query(ref =>
          Let(
            {
              doc: Get(ref),
            },
            Or(
              // A player can read any published map
              Select(['data', 'published'], Var('doc'), false),

              // A player can read their own maps
              Equals(
                Select(['data', 'creator'], Var('doc'), false),
                CurrentIdentity()
              )
            )
          )
        ),

        // A player can create maps only if he is the creator
        create: Query(newDoc =>
          Equals(Select(['data', 'creator'], newDoc), CurrentIdentity())
        ),

        // A player can update a map only if he is the creator, and
        //   it does not change the creator
        write: Query((oldData, newData) =>
          And(
            Equals(Select(['data', 'creator'], oldData), CurrentIdentity()),

            Not(ContainsPath(['creator'], newData)),
            Not(ContainsPath(['created'], oldData))
          )
        ),
      },
    },
  ],
})
