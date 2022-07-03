import { Tokens, CreateIndex } from 'faunadb'

export default CreateIndex({
  name: 'tokens-by-user',
  source: [
    {
      collection: Tokens(),
    },
  ],
  terms: [{ field: ['instance'] }],
  values: [
    {
      field: ['data', 'created'],
      reverse: true,
    },
    {
      field: ['ref'],
    },
  ],
})
