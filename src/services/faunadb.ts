
import faunadb from 'faunadb'

const secret = process.env.NEXT_PUBLIC_FAUNADB_SECRET_KEY || ""
const endpoint = process.env.NEXT_PUBLIC_FAUNADB_ENDPOINT || ""

export const faunadbClient = new  faunadb.Client({
  secret: secret,
  domain: "db.us.fauna.com",
})