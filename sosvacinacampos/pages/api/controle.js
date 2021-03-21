// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '../../utils/db'

export default async (req, res) => {
  const control = await db.collection('vacinacao')
  const controlData = (await control.get()).docs.map(control => ({id: control.id,
    ...control.data()}))

  return res.status(200).json(controlData)
}
