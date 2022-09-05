import dotenv from 'dotenv'
import envVar from 'env-var'
import fauna from 'faunadb'
import { testMap } from '../seed/official-maps/testMap.mjs'
const { Client, Collection, Create } = fauna

dotenv.config()

const key = envVar.get('FAUNA_ADMIN_KEY').required().asString()

const client = new Client({ secret: key })

client
  .query(
    Create(Collection('official-maps'), {
      data: testMap,
    })
  )
  .then(() => {
    console.log('Finished')
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
